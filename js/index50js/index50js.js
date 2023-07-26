function firstNonRepeatingCharacter(str) {
    let splitStr = str.split("")

    const aaa = splitStr.reduce(function(aggr, val) {
      if(aggr[val] === undefined) {
        aggr[val] = 1
      } else {
        aggr[val]++
      }
      return aggr
    }, {})


    // Object.keys(aaa).forEach(function(key) {
    //     if(aaa[key] === 1) {
    //         alert(key)
    //     }
    // })
    
 /*    function shift (arr) {
        let a = w[0]
        w = arr.filter(function(val, i) {
        return i !== 0
        })
        return a
        } */

      let w = Object.keys(aaa).filter(function(key) {
              if(aaa[key] === 1) {
                  return true
              }
              return false
          })

    return w[0]  // shift(w)
    
}

alert(firstNonRepeatingCharacter("asdfadfgtthh"))