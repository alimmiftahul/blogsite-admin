export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            console.log(user);
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            console.log('sessionss : ', session);
            return session;
        },
        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin');
            const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
            const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

            // / Only admin can reach the admin dashboard

            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            //// only authenticated users can reach blog pages
            // if (isOnBlogPage && !user) {
            //     return false;
            // }

            //// only authincated user can reach login pages
            if (isOnLoginPage && user) {
                return Response.redirect(new URL('/about', request.nextUrl));
            }
            return true;
        },
    },
};
