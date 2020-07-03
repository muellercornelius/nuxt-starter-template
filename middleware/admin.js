export default async function (context) {
  if (context.store.$auth.$state.user.role !== undefined) {
    if (context.store.$auth.$state.user.role.type !== 'admin') {
      context.redirect("/login")
    }
  } else {
    const res = await context.$axios.get("/users/me");
    if (res.data.role.type !== 'admin') {
        context.redirect("/login")
      }
  }
}
