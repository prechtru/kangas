import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY;
const [owner = "prechtru", repo = "kangas"] = repository?.split("/") ?? [];
const isUserSiteRepo = repo === `${owner}.github.io`;
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isGitHubActions && !isUserSiteRepo ? `/${repo}` : "/"
});
