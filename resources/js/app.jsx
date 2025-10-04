import "../css/app.css";
import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";
import GuestLayout from "./Layouts/GuestLayout";

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => {
        return resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ).then((module) => {
            // Apply default layout only if no layout is set
            if (module.default.layout === undefined) {
                module.default.layout = (page) => {
                    // Get title from props, page component, or use default
                    const title =
                        page.props.title ||
                        module.default.title ||
                        "Programmer ng Bayan";

                    return <GuestLayout children={page} title={title} />;
                };
            }
            return module;
        });
    },
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
