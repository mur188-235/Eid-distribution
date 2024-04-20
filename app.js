function calculateTotal() {
    const note10 = (document.getElementById("amount-1")).value
    const note20 = (document.getElementById("amount-2")).value
    const note50 = (document.getElementById("amount-3")).value
    const note100 = (document.getElementById("amount-4")).value
    const note500 = (document.getElementById("amount-5")).value
    const note1000 = (document.getElementById("amount-6")).value
    const note5000 = (document.getElementById("amount-7")).value

    const totalAmount = (note10 * 10) + (note20 * 20) + (note50 * 50) + (note100 * 100) + (note500 * 500) + (note1000 * 1000) + (note5000 * 5000)
    const userName = document.getElementById("sender-Name").value
    alert(totalAmount + " send by " + userName)
}