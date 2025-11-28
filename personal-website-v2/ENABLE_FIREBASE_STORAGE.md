# Firebase Storage Setup Required

## ❌ Current Error

```
404 - "The specified bucket does not exist."
```

## 🎯 Root Cause

**Firebase Storage is NOT enabled** in your Firebase Console yet!

## ✅ How to Fix

### Step 1: Enable Firebase Storage

1. Go to: https://console.firebase.google.com/project/personal-website-kabuchi/storage
2. Click **"Get Started"** button
3. Accept the default security rules (we'll update them)
4. Click **"Done"**

### Step 2: Set Security Rules

After enabling Storage, update the security rules:

1. Go to the **"Rules"** tab in Firebase Storage
2. Replace the content with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow public read access to blog-images
    match /blog-images/{allPaths=**} {
      allow read: if true;
      allow write: if true; // For n8n uploads (consider auth later)
    }
  }
}
```

3. Click **"Publish"**

### Step 3: Find Your Bucket Name

After enabling Storage, you'll see your bucket name in the Firebase Console. It will be one of:
- `personal-website-kabuchi.appspot.com` (old format)
- `personal-website-kabuchi.firebasestorage.app` (new format)

**Copy the exact bucket name** from the Firebase Console.

### Step 4: Update Code

Once you have the correct bucket name from Firebase Console, let me know and I'll update:
- `lib/firebase-admin.ts` 
- `app/api/upload-image/route.ts`

## Why This Happened

Firebase projects don't have Storage enabled by default. You must manually enable it through the Firebase Console before the API can access it.

## Next Steps

1. ✅ Enable Firebase Storage (Step 1 & 2 above)
2. 📝 Tell me the exact bucket name you see
3. 🔧 I'll update the code with the correct bucket name
4. ✅ Test upload again
5. 🚀 Deploy to production

**Important:** Don't deploy until we confirm uploads work locally first!
