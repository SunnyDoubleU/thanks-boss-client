const sizes = {
    mobile: `566px`,
    desktop1366: '1366px',
    desktop: `1900px`,
}

export const device = {
    mobile: `(max-width: ${sizes.mobile})`,
    desktop1366: `(min-width: ${sizes.mobile}) and (max-width: ${sizes.desktop1366})`,
    desktop: `(min-width: ${sizes.desktop1366})`,
    nonDesktop: `(max-width: ${sizes.desktop})`,
}
