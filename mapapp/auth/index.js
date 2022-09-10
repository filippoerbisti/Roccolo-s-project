const authenticated = false
export const isAuthenticated = () => authenticated
export const authenticateUser = () => { authenticated = true }
export const unauthenticateUser = () => {authenticated = false}