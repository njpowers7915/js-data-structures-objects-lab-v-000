// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let clone = { ...driver};
  clone[key] = value;
  return clone;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {

}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
  return driver;
}
