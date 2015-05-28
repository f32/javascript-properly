// Bob
if (price < 200 || price > 600) {
  alert("Price is too low or too high! Don't buy the gadget.");
} else {
  alert("Price is right! Buy the gadget.");
}
// ^ это верное решение, т.к. проъодит все необходимые базовые проверки.

// Bill
if (price >= 200 || price <=600) {
  alert("Price is right! Buy the gadget.");
} else {
  alert("Price is too low or too high! Don't buy the gadget.");
}
// ^ неверное решение, т.к. не проходит много проверок: 100, 1000, например.
