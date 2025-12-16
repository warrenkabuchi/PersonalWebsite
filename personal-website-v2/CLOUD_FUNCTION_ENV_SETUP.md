# Firebase Cloud Function Environment Variables Setup

## Problem
The production Cloud Function needs Firebase Admin environment variables at **runtime**, not just at build time.

## Solution: Add Environment Variables to Cloud Function

### Step-by-Step Instructions

1. **Go to Cloud Function in Google Cloud Console:**
   
   https://console.cloud.google.com/functions/details/us-central1/ssrpersonalwebsitekabuc?project=personal-website-kabuchi

2. **Click the "EDIT" button** at the top of the page

3. **Expand "Runtime, build, connections and security settings"**

4. **Scroll down to "Runtime environment variables"**

5. **Click "+ ADD VARIABLE"** and add these three variables:

   **Variable 1:**
   - Name: `FIREBASE_PROJECT_ID`
   - Value: `personal-website-kabuchi`

   **Variable 2:**
   - Name: `FIREBASE_CLIENT_EMAIL`  
   - Value: `firebase-adminsdk-fbsvc@personal-website-kabuchi.iam.gserviceaccount.com`

   **Variable 3:**
   - Name: `FIREBASE_PRIVATE_KEY`
   - Value: (paste the entire private key from `.env.local` including the `-----BEGIN` and `-----END` lines and the `\n` characters)

6. **Click "NEXT"** at the bottom

7. **Click "DEPLOY"** to redeploy the function with the new environment variables

### Expected Result

After the function redeploys (takes ~2-3 minutes), your n8n workflow will be able to upload images successfully to production!

### Why This is Needed

- ✅ `.env.local` works for **local development**
- ✅ Build process reads `.env.local` during **build time**  
- ❌ Cloud Function needs variables at **runtime** (when n8n calls the API)
- ✅ Setting runtime environment variables fixes the production issue

### Testing After Setup

Once deployed with environment variables, test from n8n:
```
POST https://warrenkabuchi.com/api/upload-image
Content-Type: multipart/form-data
Field: image (binary file)
```

Expected response:
```json
{
  "success": true,
  "url": "https://storage.googleapis.com/...",
  "filename": "..."
}
```
