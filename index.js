// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let clone;
  clone[key] = value;
  return driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {key: value});
}

function deleteFromDriverByKey(driver, key) {

}

function destructivelyDeleteFromDriverByKey(driver, key) {

}
