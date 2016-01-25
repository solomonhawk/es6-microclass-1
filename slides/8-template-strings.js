function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(`User ${ user.name } is not authorized to do ${ action }.`)
  }
}



function SaferHTML(templateData) {
  let s = templateData[0]

  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i])

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")

    // Don't escape special characters in the template.
    s += templateData[i]
  }

  return s
}

let message = SaferHTML`<p>${ bonk.sender } has sent you a bonk.</p>`

// i18n with tagged template literals
// http://jaysoo.ca/2014/03/20/i18n-with-es6-template-strings/
