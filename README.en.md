# NuxtShadeKit

A modern full-stack template project based on **Nuxt 4** + **Tailwind CSS v4** + **shadcn-vue**, integrated with **OAuth authentication**, **API security protection**, unified UI system, and comprehensive engineering configuration. Perfect as a starting point for enterprise-level projects or a scaffold for rapid personal development.

⚡️ This repository is set up as a GitHub Template, allowing you to start your project with one click.

<p align="center">
  <a href="#">English</a> | <a href="README.md">中文</a>
</p>

![NuxtShadeKit](./public/image/image.png)

## 📋 Feature Roadmap

- [x] **Nuxt 4 Base Architecture** - Complete SSR/SSG support
- [x] **Tailwind CSS v4 Integration** - Atomic styling system
- [x] **shadcn-vue Component Library** - 40+ high-quality UI components
- [x] **GitHub OAuth Login** - Based on nuxt-auth-utils
- [x] **Security Protection System** - Complete CSRF, CORS, CSP configuration
- [x] **Code Standards** - ESLint + Prettier + Husky
- [x] **TypeScript Support** - Complete type definitions
- [x] **Development Tools** - Nuxt DevTools integration
- [x] **Dark Mode Toggle** - Complete theme system
- [x] **Internationalization Support** - i18n multi-language configuration
- [ ] **Database Integration** - Prisma ORM + PostgreSQL
- [ ] **Logging System** - Unified log collection and analysis
- [ ] **Docker Deployment** - Containerized deployment solution

## ✨ Core Features

### 🎨 Modern Tech Stack

- **Nuxt 4** — Latest version with fast development experience and complete SSR/SSG support
- **Tailwind CSS v4** — New atomic styling system with better performance
- **shadcn-vue** — High-quality Vue component library based on Radix UI
- **TypeScript** — Complete type support to improve development efficiency

### 🔐 Authentication (nuxt-auth-utils)

- **Multiple OAuth Login** — GitHub, Google, Microsoft, Discord, etc.
- **Session Management** — Secure server-side session storage
- **Route Protection** — Middleware automatically protects authenticated pages
- **Type Safety** — Complete TypeScript type definitions

### 🛡️ Security Protection (nuxt-security)

- **CSRF Protection** — Cross-site request forgery attack protection
- **CORS Configuration** — Flexible cross-origin resource sharing control
- **Security Headers** — CSP, HSTS, X-Frame-Options, etc.
- **Rate Limiting** — API endpoint anti-scraping protection
- **XSS Protection** — Content Security Policy automatic configuration

### 🧱 UI Component System

- **shadcn-vue Components** — Button, Card, Dialog, Form, and 40+ components
- **Dark Mode** — Built-in theme switching support
- **Responsive Design** — Mobile-first design philosophy
- **Customizable** — Full control over component styles and behavior

### 🛠️ Engineering Configuration

- **ESLint + Prettier** — Unified code standards
- **Husky + lint-staged** — Automatic formatting before Git commits
- **VSCode Configuration** — Plugin recommendations and workspace best practices
- **Nuxt DevTools** — Powerful development debugging tools
- **Modular Structure** — Clear directory organization

## 📁 Project Structure

```
NuxtShadeKit
├── app/
│   ├── components/          # Vue components
│   │   └── ui/             # shadcn-vue UI components
│   ├── composables/        # Composable functions
│   ├── layouts/            # Layout components
│   ├── middleware/         # Route middleware
│   ├── pages/              # Page routes
│   └── app.vue             # Application entry
├── server/
│   ├── api/                # API routes
│   └── routes/
│       └── auth/           # OAuth authentication routes
│           └── github.get.ts
├── nuxt.config.ts          # Nuxt configuration
└── package.json
```

## 🚀 Quick Start

### 1. Create Project from Template

Click **Use this template** → **Create a new repository** in the top right corner of the GitHub page

Or use the command:

```bash
npx degit yourname/NuxtShadeKit my-project
cd my-project
```

### 2. Install Dependencies

```bash
pnpm install
# or yarn install
# or npm install
```

### 3. Configure Environment Variables

Create a `.env` file and configure the following variables:

```env
# Session secret (required)
NUXT_SESSION_PASSWORD=your-secret-password-min-32-chars

# GitHub OAuth (for GitHub login)
NUXT_OAUTH_GITHUB_CLIENT_ID=your-github-client-id
NUXT_OAUTH_GITHUB_CLIENT_SECRET=your-github-client-secret
```

### 4. Start Development Environment

```bash
pnpm dev
```

Visit `http://localhost:3000`

## 🔐 Authentication System (nuxt-auth-utils)

### Quick GitHub OAuth Setup

1. **Create GitHub OAuth App**
   - Visit [GitHub Developer Settings](https://github.com/settings/developers)
   - **Callback URL**: `http://localhost:3000/auth/github`

2. **Configure Environment Variables** (`.env`)

```env
NUXT_OAUTH_GITHUB_CLIENT_ID=your_client_id
NUXT_OAUTH_GITHUB_CLIENT_SECRET=your_client_secret
```

3. **Server Route** (`server/routes/auth/github.get.ts`)

```typescript
export default defineOAuthGitHubEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: { name: user.name, email: user.email, avatar: user.avatar_url },
    });
    return sendRedirect(event, "/");
  },
});
```

4. **Frontend Trigger Login**

```vue
<button @click="navigateTo($localePath('/auth/github'), { external: true })">
  Login with GitHub
</button>
```

### Route Protection

```typescript
// middleware/auth.ts
export default defineNuxtRouteMiddleware(async () => {
  const { data } = await useFetch("/api/_auth/session");
  if (!data.value?.user) return navigateTo("/login");
});
```

### Supported OAuth Providers

GitHub, Google, Microsoft, Discord, Twitch, LinkedIn, Facebook, and more — [View full list](https://github.com/Atinux/nuxt-auth-utils#supported-oauth-providers)

## 🛡️ Security Protection (nuxt-security)

### Core Configuration (`nuxt.config.ts`)

```typescript
export default defineNuxtConfig({
  modules: ["nuxt-security"],

  security: {
    csrf: true, // CSRF protection
    headers: {
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https:"],
      },
    },
  },

  routeRules: {
    "/api/**": { csurf: { enabled: true } },
  },
});
```

### Main Features

| Feature                | Description                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| **CSRF Protection**    | Cross-site request forgery attack protection, automatic token generation and verification |
| **CORS Configuration** | Flexible cross-origin resource sharing control                                            |
| **Security Headers**   | X-Frame-Options, X-Content-Type-Options, HSTS, etc.                                       |
| **CSP Policy**         | Content Security Policy to prevent XSS attacks                                            |
| **Rate Limiting**      | API endpoint anti-scraping protection                                                     |

### Production Environment Recommendations

- ✅ Enable HTTPS
- ✅ Enable CSRF protection for API routes
- ✅ Configure strict CSP policy
- ✅ Set reasonable rate limits
- ✅ Configure HSTS headers

## 🎨 UI Components

Supports 40+ high-quality components: Button, Card, Dialog, Form, Table, Select, Popover, etc. — [Full list](https://www.shadcn-vue.com/)

## 🛠️ Development Tools

### Development Commands

```bash
pnpm dev       # Start development server
pnpm build     # Build production version
pnpm preview   # Preview production build
pnpm lint      # Code formatting and checking
```

## 🚀 Deploy to Cloudflare Pages

This project is configured to deploy to **Cloudflare Pages** (more stable than Workers for access in China).

### Method 1: Deploy Using Wrangler CLI

1. **Install Wrangler** (if not already installed):

```bash
npm install -g wrangler
# or
pnpm add -g wrangler
```

2. **Login to Cloudflare**:

```bash
wrangler login
```

3. **Build and Deploy**:

```bash
pnpm build
pnpm deploy
# or directly use
wrangler pages deploy dist --project-name=nuxt-shade-kit
```

**Preview Build Result** (local testing):

```bash
pnpm build
wrangler pages dev dist
```

### Method 2: GitHub Actions Auto Deployment (Recommended)

The project is configured with GitHub Actions workflow. Pushing to `master` or `main` branch will automatically trigger build and deployment to Cloudflare Pages.

#### Configuration Steps:

1. **Get Cloudflare API Token**:
   - Login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to **My Profile** → **API Tokens**
   - Click **Create Token** → **Create Custom Token**
   - Configure permissions:
     - **Account** → **Cloudflare Pages** → **Edit**
   - Copy the generated Token

2. **Get Account ID**:
   - You can see **Account ID** in the right sidebar of Cloudflare Dashboard

3. **Configure GitHub Secrets**:
   - Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**
   - Add the following Secrets:
     ```
     CLOUDFLARE_API_TOKEN      # Cloudflare API Token
     CLOUDFLARE_ACCOUNT_ID     # Cloudflare Account ID
     NUXT_OAUTH_GITHUB_CLIENT_ID       # GitHub OAuth Client ID (optional, if needed during build)
     NUXT_OAUTH_GITHUB_CLIENT_SECRET   # GitHub OAuth Client Secret (optional)
     NUXT_SESSION_PASSWORD             # Session secret (optional)
     ```

4. **First Deployment**:
   - Push to `master` or `main` branch
   - GitHub Actions will automatically trigger build and deployment
   - Check deployment status in the **Actions** tab

5. **Create Pages Project in Cloudflare** (required for first time):
   - Login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to **Pages** → **Create project**
   - Project name: `nuxt-shade-kit`
   - Choose **Direct upload** or wait for GitHub Actions first deployment

6. **Configure Compatibility Flags** (important):
   - In Cloudflare Pages project settings
   - Find **Functions** → **Compatibility Flags**
   - Enable **Node.js Compatibility** (`nodejs_compat`)

7. **Configure Environment Variables** (in Cloudflare Dashboard):
   - Go to project settings → **Environment Variables**
   - Add the following variables:
     ```
     NUXT_OAUTH_GITHUB_CLIENT_ID=your-github-client-id
     NUXT_OAUTH_GITHUB_CLIENT_SECRET=your-github-client-secret
     NUXT_SESSION_PASSWORD=your-secret-password-min-32-chars
     ```

### Method 3: Deploy via Cloudflare Dashboard

1. **Connect Git Repository**:
   - Login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to **Pages** → **Create project** → **Connect to Git**
   - Authorize and select your GitHub/GitLab repository

2. **Configure Build Settings**:
   - **Project name**: `nuxt-shade-kit`
   - **Production branch**: `main` or `master`
   - **Build command**: `pnpm install && pnpm build`
   - **Build output directory**: `dist`
   - **Node.js version**: `22`

3. **Configure Compatibility Flags** (important):
   - In project settings, find **Functions** or **Compatibility Flags** settings
   - Enable **Node.js Compatibility** (`nodejs_compat`)
   - Or add in **Settings** → **Functions** → **Compatibility Flags**: `nodejs_compat`
   - ⚠️ **Must configure**: Otherwise deployment will fail with "No such module node:buffer"

4. **Configure Environment Variables**: Add the following environment variables in project settings:

   ```
   NUXT_OAUTH_GITHUB_CLIENT_ID=your-github-client-id
   NUXT_OAUTH_GITHUB_CLIENT_SECRET=your-github-client-secret
   NUXT_SESSION_PASSWORD=your-secret-password-min-32-chars
   ```

5. **Deploy**:
   - Click **Save and Deploy**
   - After deployment completes, you will get a `*.pages.dev` domain

### Configure Custom Domain

1. In Cloudflare Pages project settings, click **Custom Domain**
2. Enter your domain and configure DNS as prompted
3. Ensure SSL/TLS mode is set to **Full**

### Important Notes

- ⚠️ **Node.js Compatibility Flag**: Must enable `nodejs_compat` compatibility flag in Cloudflare Dashboard, otherwise deployment will fail
- ⚠️ **Environment Variable Security**: Sensitive information (such as OAuth Secret, Session Password) should be set through Cloudflare Dashboard environment variables, do not commit to Git
- ✅ **GitHub OAuth Callback URL**: After deployment, update to `https://your-domain.pages.dev/auth/github`
- 📝 **Auto Deployment**: After connecting Git, each push to main branch will automatically trigger deployment
- 🔧 **CLI Deployment**: When using CLI deployment, compatibility flags are passed via `--compatibility-flags=nodejs_compat` parameter

### VSCode Plugin Recommendations

The project is configured with `.vscode/extensions.json`. VSCode will automatically prompt to install recommended plugins when opening the project for the first time:

**Essential Plugins**:

- Vue - Official (Volar)
- Nuxtr
- Tailwind CSS IntelliSense
- ESLint
- Prettier

**Recommended Plugins**:

- GitLens
- Error Lens
- Path Intellisense
- Auto Rename Tag

**Workspace Configuration**: The project includes best practice `.vscode/settings.json`, including auto-formatting, ESLint fixes, etc.

**Git Commits**: Configured with Husky + lint-staged, automatically formats code on commit

## 📚 Related Documentation

- [Nuxt 4 Documentation](https://nuxt.com/)
- [nuxt-auth-utils Documentation](https://github.com/Atinux/nuxt-auth-utils)
- [nuxt-security Documentation](https://nuxt-security.vercel.app/)
- [shadcn-vue Documentation](https://www.shadcn-vue.com/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

This project is licensed under [MIT License](LICENSE) and can be freely used for commercial projects.
