# MagicCorporation website

## Project goal

This project is a personal reworking project of MagicCorporation.com website to increase my developping skills. It will not be put on production server or publish in anyway except with the agreement of MagicCorporation.com.

## Libraries

- React
- Next.js
- GraphQL
- Apollo Client
- Typescript
- Storybook
- Jest
- React Testing Library

## Architecture

- `src/components`: container and presentational components
- `src/images`: images
  - `src/images/icons`: all icons
- `src/pages`: page container components, used directly by Next.js routing
- `src/providers`: providers
  - `src/providers/api`: API provider
    - `src/api/default`: default values if API responses are null or wrong
    - `src/api/formats`: API responses formatting functions
    - `src/api/queries`: all GraphQL queries
  - `src/providers/state`: State provider
- `src/samples`: API responses and variables used by storybook and tests
- `src/types`: shared typing
- `src/utils`: utility functions

## Releases

- 0.1.0: New repository
- 0.1.1: Loader component
- 0.2.0: API GraphQL
- 0.2.1: State provider
