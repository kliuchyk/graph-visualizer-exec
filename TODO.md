## Implemented

- ReactFlowContainer component, which contains React Flow basic node logic
- GraphNode component
  - added custom Type for it
  - dynamically changes styles (depending on its variant)
- NodeBadge and Popover to show some Node details
- Simple Sidebar component
- Shared UI Header and Paper components

## Next steps

**Tech stack**

- UI kit: include shadcn/ui lib
- API layer: TanStack Query
- State management: redux-toolkit, zustand (if there is a need)

**Improvements**

- Define project file structure
- Setup layout with Navigation Sidebar block (re-use shadcd/ui)
- Extend Graph nodes functionality
  - dynamically add more nodes to the Graph View
  - use more solutions from the React-Flow lib (Tooltips, theming, etc..)
