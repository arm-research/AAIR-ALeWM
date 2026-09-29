# AAIR-ALeWM paper website

A static project page for **Adaptive Latent Capacity for World Models** by Idan Achituve, Lior Dikstein, Idit Diamant, Arnon Netzer, and Hai Victor Habi (Arm Research).

Paper: https://arxiv.org/abs/2609.32921

Repository: [arm-research/AAIR-ALeWM](https://github.com/arm-research/AAIR-ALeWM)

Intended GitHub Pages address: `https://arm-research.github.io/AAIR-ALeWM/`

## Preview

The website is in `docs/`, leaving the repository root available for the research code. From the repository root, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory docs
```

Open `http://127.0.0.1:8000/`. Opening `docs/index.html` directly also works; citation copying may use the select-and-copy fallback on a file URL.

## Publish

1. Commit and push the website to the repository's `main` branch. Keep `docs/.nojekyll` so GitHub serves the files directly.
2. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, then **main** and **/docs**, and save.
3. When the Pages deployment completes, check the address and visibility shown by GitHub. The expected project address is listed above, unless the organization uses a custom domain.

The local repository uses `main` and its `origin` points to the GitHub repository above. After committing local edits, upload them with:

```sh
git push -u origin main
```

No build system, server application, package installation, external fonts, analytics, or JavaScript CDN is needed. Images, video, styles, and scripts are all local assets. GitHub's setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
