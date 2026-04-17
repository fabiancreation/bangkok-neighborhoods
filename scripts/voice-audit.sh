#!/usr/bin/env bash
# Voice audit for landing page copy. Mirrors the book's styleguide.
# Fails (exit 1) if any forbidden pattern is found in src/content/*.ts.
set -u

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TARGETS=("$ROOT/src/content")
FAIL=0

RED=$'\033[31m'
GREEN=$'\033[32m'
YELLOW=$'\033[33m'
RESET=$'\033[0m'

check() {
  local label="$1"; shift
  local pattern="$1"; shift
  local hits
  hits=$(grep -rniE --include='*.ts' --include='*.tsx' "$pattern" "${TARGETS[@]}" || true)
  if [ -n "$hits" ]; then
    echo "${RED}✗ $label${RESET}"
    echo "$hits" | sed 's/^/    /'
    FAIL=1
  else
    echo "${GREEN}✓ $label${RESET}"
  fi
}

echo "${YELLOW}Voice audit — src/content${RESET}"

check "Em-dashes (—)" "—"
check "AI vocabulary (part 1)" "\\b(crucial|pivotal|vibrant|bustling|hidden gem|must-see|unforgettable|breathtaking|stunning|renowned|nestled)\\b"
check "AI vocabulary (part 2)" "\\b(juxtaposition|tapestry|testament|beacon|furthermore|moreover|additionally|showcase|foster|enhance|delve|garner|interplay)\\b"
check "Copula tells" "(serves as|stands as|marks a |represents a )"
check "-ing analyses" "(highlighting the|underscoring the|emphasizing the|fostering|showcasing|symbolizing)"
check "Hedge phrases" "(it.s important to note|it should be mentioned|one might argue|it.s worth noting)"

if [ "$FAIL" -ne 0 ]; then
  echo "${RED}Audit failed.${RESET}"
  exit 1
fi

echo "${GREEN}All checks passed.${RESET}"
