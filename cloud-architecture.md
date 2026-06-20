# Cloud Architecture & Security Blueprint

This document outlines the required backend architecture specifications for MMHFSP when serverless functions and databases are deployed. This ensures anti-crash, zero-blank, and defensive security guidelines are strictly enforced at the cloud layer.

## 1. Serverless Backend Controls & Agent Scaling

### Framework & Runtime
- **Gen 2 Framework:** All serverless functions must utilize Firebase Functions (Gen 2) or Google Cloud Run to ensure parallel request concurrency and cold-start mitigations.
- **Node.js Runtime:** Enforce modern runtime engines (Node.js 20+) in `package.json` to prevent deployment blocks due to legacy runtime deprecations.
- **Dedicated Cloud Region:** Pin execution to a dedicated, localized cloud region (e.g., `af-south-1` for South African data residency compliance) to reduce latency and maintain POPIA jurisdictional boundaries.

### Conversational Memory Cache Limits
If an automated AI advisory chat or ticket history engine is introduced:
- **Strict Array Slicing:** The saved conversational history array MUST be sliced to a maximum of the last 10 turns.
- **OOM Prevention:** This protects the server environment from Out-Of-Memory (OOM) heap crashes during peak traffic and avoids LLM context window token overflows on third-party API calls.

## 2. Defensive Security & Data Sanitization

### Default-Deny Rulesets
All connected cloud databases (e.g., Firestore) and Cloud Storage buckets must enforce a strict `default-deny` security ruleset:
- **Write-Only Public Access:** Authenticated and anonymous public users should only be granted write-only access to submit data (e.g., case inquiries).
- **Read-Access Blocking:** Read permissions must be strictly blocked by default, granted exclusively to verified corporate administrators (e.g., Dr. Christopher Mushwana's secure UID) and specific record owners to prevent mass data leaks.

### Data Sanitization
- **Incoming Payloads:** Ensure all backend endpoints sanitize incoming text inputs by casting, lowercasing, and trimming values (matching the frontend logic implemented in `ContactForm.tsx`).
- **Payment Hooks:** Parse custom transactional values explicitly as floats or integers before interacting with payment gateways to prevent NoSQL database injection vectors.

### Google Cloud Secret Manager
- **Credential Isolation:** Securely isolate all sensitive API credentials, permanent authentication tokens, webhook verify passphrases, and OpenAI keys.
- **Runtime Injection:** Never write keys directly into source code files or standard `.env` files committed to version control. Instead, store them in Google Cloud Secret Manager and configure the serverless endpoints to load them dynamically at runtime.
