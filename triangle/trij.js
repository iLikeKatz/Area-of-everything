function compTri() {
    let h = height.value * 1
    let b = base.value * 1
    let hOfP = hofPri.value * 1
    let sL1 = sideL1.value *1
    let sL2 = sideL2.value *1
    
    let Base_circumference  = sL1 + sL2 + b
    let baseArae = 1/2 * h * b
    let baseArae2 = baseArae*2
    let sideArea = Base_circumference * hOfP
    let areaAll = baseArae2 + sideArea
    let volume = baseArae * hOfP

    document.getElementById('baseArea').innerHTML = `Area = 1/2 * ${h} * ${b} = ${baseArae}`
    document.getElementById('baseArea2').innerHTML = `Area*2 = ${baseArae2}`
    document.getElementById('sideArea').innerHTML = `Side area = ( ${b} + ${sL1} + ${sL2}) * ${hOfP} = ${sideArea}`
    document.getElementById('areaAll').innerHTML = `Area all = ${sideArea} + ${baseArae2} = ${areaAll}`
    document.getElementById('vol').innerHTML = `volume = ${baseArae} * ${hOfP} = ${volume}`

    height.value = ""
    base.value = ""
    hofPri.value = ""
    sideL1.value = ""
    sideL2.value = ""

}