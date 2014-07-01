// JavaScript Document

document.addEventListener("deviceready", onDeviceReady, false);
// Cordova is ready
//
function onDeviceReady() 
{
	var element = document.getElementById('device_ready');
	element.innerHTML = 'The Device is Ready!'
}