# MMHFSP — MyMental Health Consulting

Medico-Legal Advisory & Indemnity platform for healthcare professionals across South Africa, Namibia, and Eswatini.

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

The app is served at `http://localhost:3000`.

## Build

```
npm run build
```

Output is written to `dist/` and deployed to Firebase Hosting via GitHub Actions on every push to `main`.

## Project Structure

- `index.html` / `src/main.tsx` — landing site entry
- `profile.html` / `src/profile-main.tsx` — professional profile site entry
- `src/components/` — shared React components
- `src/utils/pdfGenerator.ts` — client-side PDF credential brief generation
- `firestore.rules` / `storage.rules` — Firebase security rules
