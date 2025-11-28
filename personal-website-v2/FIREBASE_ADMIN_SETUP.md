# Firebase Admin Setup Guide

## Required Environment Variables

Add these to your `.env.local` file:

```bash
# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID=personal-website-kabuchi
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@personal-website-kabuchi.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYourPrivateKeyHere\n-----END PRIVATE KEY-----\n"
```

## How to Get These Values

### 1. Go to Firebase Console
Visit: https://console.firebase.google.com/project/personal-website-kabuchi/settings/serviceaccounts/adminsdk

### 2. Generate New Private Key
- Click "Generate New Private Key"
- Download the JSON file
- **DO NOT commit this file to Git!**

### 3. Extract Values from JSON

From the downloaded JSON file, copy:
- `project_id` → `FIREBASE_PROJECT_ID`
- `client_email` → `FIREBASE_CLIENT_EMAIL`  
- `private_key` → `FIREBASE_PRIVATE_KEY` (keep the quotes and newlines)

### 4. Format Private Key Correctly

The private key MUST include the literal `\n` characters. Example:

```bash
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9...\n...your key...\n-----END PRIVATE KEY-----\n"
```

## Testing

After adding environment variables:

```bash
# Restart dev server
npm run dev

# Test upload endpoint
curl -X POST http://localhost:3000/api/upload-image \
  -F "image=@path/to/test-image.jpg"
```

## Troubleshooting

**Error: "project_id property"**
- Make sure `FIREBASE_PROJECT_ID` is set correctly

**Error: "storage/unknown"** 
- This should be fixed! The code now explicitly uses the bucket name.

**Error: "invalid private key"**
- Check that `FIREBASE_PRIVATE_KEY` includes `\n` for newlines
- Make sure the key is wrapped in quotes
