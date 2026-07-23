# COREFORGE Loader

A clean reconstruction of the loader behavior analyzed from the supplied Zettanix bundle:
- full-screen black background
- outlined SVG wordmark
- stroke-dash draw animation
- layered highlight/mask effect

This version intentionally uses COREFORGE with a silver/white treatment instead of the source site's name and multicolor gradient.

## Install

npm install framer-motion

Tailwind CSS is expected for the utility classes used in `CoreForgeLoader.tsx`.

## Use

Copy `CoreForgeLoader.tsx` into your components folder.

```tsx
import CoreForgeLoader from "./CoreForgeLoader";

<CoreForgeLoader duration={5} />
```

See `ExampleApp.tsx` for a simple 5-second startup-loader example.

## Customize

Change `duration={5}` for animation speed.

For a brighter white appearance, change the animated stroke:
`stroke="#f5f5f5"`

For a darker metallic appearance, edit the stops inside `silverGradient`.
