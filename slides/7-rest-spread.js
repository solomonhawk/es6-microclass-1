function path(base, ...segments) {
  return `${ base }/${ segments.join('/') }`
}

// react-redux
function defaultMergeProps(stateProps, dispatchProps, parentProps) {
  return {
    ...parentProps,
    ...stateProps,
    ...dispatchProps
  }
}

// microcosm/src/flatten.js
const BASE = []

export default function flatten() {
  return BASE.concat(...arguments)
}
