# Aroma Brew website

A responsive static website prototype based on the Aroma Brew concept and visual direction in the supplied presentation.

## Files
- `index.html` — page content and structure
- `styles.css` — responsive layout, colours, typography and imagery
- `script.js` — mobile navigation, product filters, demo basket and contact email
- `assets/` — reserved for your own image files

## Preview locally
Open `index.html` in a web browser. For a more reliable local preview, use the VS Code **Live Server** extension.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository, for example `aroma-brew-website`.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md` and the `assets` folder to the repository's root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the Pages deployment to finish. GitHub will show your live website URL in the Pages section.

## Important before a real launch
- Replace `hello@aromabrew.example` in `script.js` with your actual business email.
- Product names, descriptions and prices are sample prototype content; confirm them before publishing.
- The basket is a front-end demonstration only. It does not store orders or take payments. For real checkout, connect a trusted e-commerce/payment provider.
- The contact form opens the visitor's email application; it does not send or store submissions on a server. To receive web form submissions, connect a form service or backend.
- The images currently load from Unsplash over the internet. For a fully self-contained site, download properly licensed images and place them in `assets/`, then update the CSS image paths.
- Add your privacy, delivery, returns, terms and cookie information before taking customer orders.
