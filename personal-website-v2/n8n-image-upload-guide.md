# n8n Image Upload Guide

## Problem
When generating images with Gemini in n8n, you can't directly pass the image binary data to the blog post API. You need to upload it first and get a URL.

## Solution: Two-Step n8n Workflow

### Step 1: Upload Image to Firebase Storage
### Step 2: Create Post with Image URL

---

## n8n Workflow Setup

### 1. **Gemini Node** (Generate Image)
- Generate your image using Gemini
- Output format: Binary Data

### 2. **HTTP Request Node** (Upload Image)
**Configuration:**
- **Method:** `POST`
- **URL:** `https://personal-website-kabuchi.web.app/api/upload-image`
- **Send Body:** `Yes` (toggle ON)
- **Body Content Type:** `Form-Data` *(this is multipart-form data in n8n)*

**Body Parameters:**
- Click "Add Parameter"
- **Parameter Type:** `Form Data`
- **Name:** `image`
- **Value:** Click the expression icon and enter: `$binary.data`
  - This references the binary image data from your Gemini node
  - Make sure you're in expression mode (not fixed mode)

**What the Gemini Node Outputs:**
From your "Generate an Image" node, you'll see binary data with:
- `mimeType`: image/png
- `fileType`: image  
- `fileName`: image.png
- `fileSize`: (size in MB)

The `$binary.data` expression automatically grabs this binary image data.

**Response:**
```json
{
  "success": true,
  "url": "https://firebasestorage.googleapis.com/...",
  "filename": "1234567890-image.png"
}
```

### 3. **Set Node** (Extract Image URL)
Extract the URL from the upload response:
- **Name:** `coverImage`
- **Value:** `{{ $json.url }}`

### 4. **HTTP Request Node** (Create Post)
Use the existing post creation endpoint:
- **Method:** `POST`
- **URL:** `https://personal-website-kabuchi.web.app/api/posts/create`
- **Body:**
```json
{
  "title": "{{ $json.title }}",
  "content": "{{ $json.content }}",
  "coverImage": "{{ $('Set').item.json.coverImage }}",
  "category": "travel",
  "slug": "{{ $json.slug }}",
  "location": "{{ $json.location }}",
  "tags": {{ $json.tags }}
}
```

---

## Complete Example Workflow

```
[Trigger/Webhook]
    ↓
[Gemini: Generate Image]
    ↓
[HTTP: Upload Image] → Returns URL
    ↓
[Set: Extract URL]
    ↓
[HTTP: Create Post with Image URL]
```

---

## Testing with cURL

### Upload an Image:
```bash
curl -X POST https://personal-website-kabuchi.web.app/api/upload-image \
  -F "image=@/path/to/your/image.png"
```

**Response:**
```json
{
  "success": true,
  "url": "https://firebasestorage.googleapis.com/v0/b/personal-website-kabuchi.appspot.com/o/blog-images%2F1234567890-image.png?alt=media&token=abc123",
  "filename": "1234567890-image.png"
}
```

### Then Create Post with that URL:
```bash
curl -X POST https://personal-website-kabuchi.web.app/api/posts/create \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My AI Generated Post",
    "content": "<p>Check out this AI-generated image!</p>",
    "coverImage": "https://firebasestorage.googleapis.com/...",
    "category": "work",
    "slug": "ai-generated-post",
    "tags": ["ai", "gemini"]
  }'
```

---

## Alternative: Google Photos API (More Complex)

If you prefer Google Photos, you'd need to:

1. **Set up Google Photos API** in Google Cloud Console
2. **Create OAuth credentials**
3. **Upload with n8n Google Photos node**
4. **Extract shared URL**
5. **Use URL in post**

**NOTE:** Google Photos URLs can expire and require more setup. Firebase Storage is simpler and more reliable for this use case.

---

## Firebase Storage Setup (One-Time)

If you haven't enabled Firebase Storage yet:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `personal-website-kabuchi`
3. Go to **Storage** in the left menu
4. Click **Get Started**
5. Choose **Production mode** for now
6. Select a location (e.g., `us-central`)
7. Update security rules to allow uploads:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /blog-images/{imageId} {
      // Allow anyone to read
      allow read: if true;
      // Allow uploads from your app (optional: add authentication)
      allow write: if true;
    }
  }
}
```

---

## Tips

1. **Image Size:** Gemini generates large images. Consider resizing in n8n before upload
2. **File Naming:** The API automatically adds timestamp to prevent conflicts
3. **Allowed Types:** PNG, JPG, WEBP, GIF all work
4. **Max Size:** Firebase Storage free tier has 1GB storage and 10GB/month transfer
5. **Security:** Consider adding API key authentication later if needed

---

## Monitoring

Check your terminal where `npm run dev` is running for logs:

```
✅ Image uploaded successfully
Filename: 1701234567890-gemini-image.png
URL: https://firebasestorage.googleapis.com/...
```
