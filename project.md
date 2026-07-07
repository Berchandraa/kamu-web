# KAMU Concepts Projects

Source: https://www.kamuconcepts.com/

Last checked: 2026-07-06

Note: This file records project names found from the live KAMU Concepts website. The public page exposes portfolio items mostly through image filenames and Wix page labels. For fields not exposed on the website, use the existing demo data in `src/data/projects.ts` as temporary working copy until client/PM confirms the final content.

## Verified Portfolio Items

| No. | Project | Website label / source clue | Asset filename found |
| --- | --- | --- | --- |
| 01 | Yucca Villas Studio | `01. Yucca Villas Studio` | `Portfolio-Yucca-Villa-1.jpg` |
| 02 | Yucca Villas Two Bedroom | `02. Yucca Villas Two Bedroom` | `Portfolio-Yucca-Villa-2.jpg` |
| 03 | Mahi Mahi Suite 3 | `03. Mahi Mahi Suite 3` | `KamuConcepts-MahiMahi.jpg` |
| 04 | No Rush Villas #1 | `04. No Rush Villas #1` | `Portfolio-NoRushVillas.jpg` |
| 06 | Villa Kamal | `06. Villa Kamal` | `Portfolio-VillaKamal-1.jpg` |
| 07 | Joglo's Kamal | `07. Joglo's Kamal` | `Portfolio-VillaKamal-2.jpg` |
| 09 | The Korowai | `09. The Korowai` | `Portfolio-TheKorowai.jpg` |
| 10 | House of Orange | `10. House of Orange` | `Portfolio-HouseofOrange.jpg` |
| 11 | Concrete Retreat | `11. Concrete Retreat` | `Portfolio-ConcreteRetreat.jpg` |
| 12 | Camaya | `12. Camaya` | `Portfolio-Camaya.jpg` |
| 13 | Villa Lamer | `13. Villa Lamer` | `Portfolio-LaMerVilla.jpg` |
| 14 | Villa Bocce | `14. Villa Bocce` | `Portfolio-VillaBocce.jpg` |
| 15 | Villa Osun | `Villa Osun` / `15.-villa-osun` | `Portfolio-VillaOsun.jpg` |

## Additional Website Images

These appeared on the live site but are not enough by themselves to create full project records:

- `KamuConcepts-MahiMahi-3.jpeg`
- `Kamu_Concepts_Villa_Bocce_4.webp`
- `Kamu_Concepts_Villa_Lamer_12.webp`

## Ready Local Asset Sets

| Project | Asset folder | Status |
| --- | --- | --- |
| Yucca Villas Studio | `public/assets/projects/yucca-villas-studio/` | 5 detail images ready; see `asset.md`. |
| Villa Bocce | `public/assets/projects/villa-bocce/` | 4 detail images ready; see `asset.md`. |
| Villa Kamal | `public/assets/projects/villa-kamal/` | 5 detail images ready; see `asset.md`. |

## Ready Product Asset Sets

| Collection | Asset folder | Status |
| --- | --- | --- |
| KAMU Collection Product Photos | `public/assets/products/kamu-collection/` | 18 product images mapped with partial PDF details; see `asset.md`. |
| Product Collection 02 | `public/assets/products/product-collection-02/` | 15 product images ready; product details still need confirmation. |
| Product Collection 03 | `public/assets/products/product-collection-03/` | 15 product images ready; product details still need confirmation. |
| Product Collection 04 | `public/assets/products/product-collection-04/` | 10 product images ready; product details still need confirmation. |

## Recommended Data Replacement

Current demo project names in `src/data/projects.ts` should be replaced with real client-facing names from the list above.

Suggested first batch:

1. Yucca Villas Studio
2. Yucca Villas Two Bedroom
3. Mahi Mahi Suite 3
4. No Rush Villas #1
5. Villa Kamal
6. Joglo's Kamal
7. The Korowai
8. House of Orange
9. Concrete Retreat
10. Camaya
11. Villa Lamer
12. Villa Bocce
13. Villa Osun

## Working Placeholder Data

Use the existing `src/data/projects.ts` values for now, only as demo placeholders:

| Field | Temporary source | Note |
| --- | --- | --- |
| Location | Existing `location` values | Safe for layout/demo, not confirmed as the real location for each live-site project. |
| Year | Existing `year` values | Safe for visual continuity, not confirmed as final client data. |
| Scope | Existing `scope` values | Keep current wording until client provides exact scope. |
| Type/category | Existing `type` values | Use for filters so the project page keeps working. |
| Intro/body/story/copy | Existing project copy | Use as temporary editorial copy; replace when client gives real case-study text. |
| Materials/quote/gallery | Existing values | Keep for demo richness; not verified against the live projects. |

## Still Needs Confirmation

- Whether missing portfolio numbers 05 and 08 are intentionally hidden, deleted, or unpublished
- Whether all website image assets are approved for use in the new demo
- Final client-approved case-study copy before production
