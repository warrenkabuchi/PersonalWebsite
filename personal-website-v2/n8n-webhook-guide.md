# n8n Webhook Integration Guide

## API Endpoint

**URL:** `https://yourdomain.com/api/posts/create`  
**Method:** `POST`  
**Content-Type:** `application/json`

## Required Fields

```json
{
  "title": "Your Post Title",
  "content": "Full post content (supports HTML)",
  "category": "travel",
  "slug": "your-post-slug"
}
```

## Optional Fields

```json
{
  "excerpt": "Short description (auto-generated from content if not provided)",
  "coverImage": "URL to cover image (defaults to placeholder)",
  "location": "City, Country",
  "date": "2025-11-27T16:00:00Z",
  "tags": ["tag1", "tag2"]
}
```

## Valid Categories

- `travel` - Travel blog posts (displayed on /travel page)
- `work` - AI/Tech articles (displayed on /ai page)
- `personal` - Personal blog posts

## n8n Workflow Setup

### 1. Create a Webhook Node
1. Add a **Webhook** node to your workflow
2. Set HTTP Method to `POST`
3. Copy the webhook URL

### 2. Add an HTTP Request Node
1. Add an **HTTP Request** node
2. Configure:
   - **Method:** `POST`
   - **URL:** `https://yourdomain.com/api/posts/create`
   - **Body Content Type:** `JSON`
   - **Body:**
     ```json
     {
       "title": "{{ $json.title }}",
       "content": "{{ $json.content }}",
       "excerpt": "{{ $json.excerpt }}",
       "coverImage": "{{ $json.coverImage }}",
       "category": "{{ $json.category }}",
       "location": "{{ $json.location }}",
       "date": "{{ $json.date }}",
       "slug": "{{ $json.slug }}",
       "tags": {{ $json.tags }}
     }
     ```

### 3. Example Workflow Ideas

**From Google Docs:**
1. Webhook triggers
2. Google Docs node reads document
3. Transform content to JSON
4. HTTP Request creates post

**From Notion:**
1. Webhook triggers when Notion page created
2. Notion node reads page content
3. HTTP Request creates post

**Manual Entry:**
1. Webhook with form data
2. HTTP Request creates post directly

## Example Request

```bash
curl -X POST https://yourdomain.com/api/posts/create \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Amazing Trip to Tokyo",
    "content": "<p>Tokyo was incredible! Here is my story...</p>",
    "excerpt": "A journey through modern and traditional Japan",
    "coverImage": "https://example.com/tokyo.jpg",
    "category": "travel",
    "location": "Tokyo, Japan",
    "date": "2025-11-27T10:00:00Z",
    "slug": "amazing-trip-tokyo",
    "tags": ["japan", "asia", "culture"]
  }'
```

## Success Response

```json
{
  "success": true,
  "message": "Post created successfully",
  "postId": "FirestoreDocumentID",
  "slug": "amazing-trip-tokyo",
  "url": "/travel/amazing-trip-tokyo"
}
```

## Error Response

```json
{
  "error": "Missing required fields",
  "required": ["title", "content", "category", "slug"]
}
```

## Tips

1. **Slug Format:** Use lowercase, hyphen-separated (e.g., `my-post-title`)
2. **Content:** Can include HTML tags for formatting
3. **Date:** Use ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ)
4. **Images:** Use full URLs for cover images
5. **Testing:** Test with a simple curl command first before setting up n8n

## Monitoring

Check your terminal where `npm run dev` is running - you'll see logs like:

```
✅ Post created successfully via n8n webhook
Post ID: abc123
Category: travel
Title: My Amazing Trip to Tokyo
```
