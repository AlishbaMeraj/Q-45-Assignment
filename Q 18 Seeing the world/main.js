var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["China", "Dehli", "Brazil", "Faisalabad", "America"];
console.log("orginal order:", countriesToVisit);
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
console.log("still in orginal order:", countriesToVisit);
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("still in orginal order:", countriesToVisit);
console.log("orginal Array Reversed:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Back to orginal order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Sorted in Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
console.log("orginal Array Reversed:", __spreadArray([], countriesToVisit, true).reverse());
