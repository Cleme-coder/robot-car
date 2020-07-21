blockyTalkyBLE.onStringReceived("show", function ({ stringValue }) {
    if (stringValue == "F") {
    	
    }
})
function front () {
	
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Happy)
})
led.enable(true)
PCA9685.init(67, 0)
