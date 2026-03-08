const normalizeUrl = (rawUrl: string) => {
    const urlWithProtocol = /^https?:\/\//.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
    return urlWithProtocol.replace(/\/+$/, "");
};

export const getSiteUrl = () => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (siteUrl) {
        return normalizeUrl(siteUrl);
    }

    const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (vercelProductionUrl) {
        return normalizeUrl(vercelProductionUrl);
    }

    const vercelUrl = process.env.VERCEL_URL;
    if (vercelUrl) {
        return normalizeUrl(vercelUrl);
    }

    return "https://my-portfolio-next.vercel.app";
};