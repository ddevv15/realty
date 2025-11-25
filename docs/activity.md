# Project Activity Log

## 2025-11-25

### Prompt: Why do I face this error with params.id?

**Issue:** User encountered a Next.js 15 error: `Route "/properties/[id]" used params.id. params is a Promise and must be unwrapped with await or React.use() before accessing its properties.`

**Solution:** 
- In Next.js 15, `params` in dynamic routes is now a Promise and must be awaited before accessing its properties
- Made the `PropertyPage` component async
- Added `const { id } = await params` to unwrap the Promise before accessing the id
- Updated `getPropertyById(params.id)` to `getPropertyById(id)`

**Files Modified:**
- `app/properties/[id]/page.jsx` - Made component async and added await for params

### Prompt: Fix rent page address rendering after slug refactor

**Issue:** `/rent` route crashed because cards attempted to render the `address` object directly, triggering "Objects are not valid as a React child."

**Solution:** Updated the rent listings to reference the formatted `property.address.full` string for both the image alt text and card title.

**Files Modified:**
- `app/rent/page.tsx` – Swapped object usage for the formatted address string.

### Prompt: Plan and execute phases starting with address URL changes

**Actions:**
- Defined multi-phase delivery approach (Phase 1: address-aware routing/data, Phase 2: search & discovery, Phase 3: personalization & marketing, Phase 4: performance & polish).
- Added structured address metadata (street, unit, city, state, zip, lat/lng, slug) to each property record while preserving IDs for internal references.
- Generated deterministic address slugs for durable, human-readable URLs.
- Replaced `/properties/[id]` route with `/homedetails/[slug]`, updating detail page logic to resolve properties by slug.
- Updated all property links (cards, buy page) to point at the new route and display the formatted address.

**Files Modified:**
- `lib/mock-data.js` – Added address metadata, slug generator, and `getPropertyByAddressSlug`.
- `components/property-card.jsx` – Linked cards to slug-based detail pages.
- `app/buy/page.tsx` – Updated links, image alt text, and address display for new structure.
- `app/homedetails/[slug]/page.jsx` – New slug-based detail route (migrated from `app/properties/[id]/page.jsx`).
- `app/properties/[id]/page.jsx` – Removed legacy route.

### Prompt: lets add a gitignore file

**Actions:**
- Created comprehensive `.gitignore` file for Next.js project
- Included common patterns: node_modules, .next build output, environment files, IDE files, OS files, logs, and cache directories

**Files Modified:**
- `.gitignore` – Created new file with Next.js-specific ignore patterns
