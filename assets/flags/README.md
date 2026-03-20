Flag SVG source-of-truth lives here.

- `svg/`: repo-owned SVG flags used as the canonical input assets
- `overrides/`: manual SVG overrides for codes not covered by the upstream source package

Source notes:

- Most SVGs are synced from the `flag-icons` package, which is MIT licensed.
- `XN` is handled as a manual override because it is not included in `flag-icons`.

Derived PNG assets are generated from these SVGs during the docs/assets build pipeline and are not intended to be edited manually.
