#!/bin/bash
# Creates a new post with today's date auto-filled
# Usage: ./ai_gen/new-post.sh my-post-slug "My Post Title"

set -e

if [ $# -lt 2 ]; then
  echo "Usage: $0 <slug> <title>"
  echo "Example: $0 my-new-post \"My New Post\""
  exit 1
fi

SLUG="$1"
TITLE="$2"
DATE_ISO=$(date +%Y-%m-%d)
DATE_DISPLAY=$(date +"%d %b %Y")

FILE="posts/${SLUG}.md"

if [ -f "$FILE" ]; then
  echo "Error: $FILE already exists"
  exit 1
fi

cat > "$FILE" << EOF
---
layout: base.njk
title: ${TITLE} - ${DATE_DISPLAY}
tags: posts
date: ${DATE_ISO}
---

# ${TITLE}

EOF

echo "Created $FILE"
