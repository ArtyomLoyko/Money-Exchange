module.exports = function makeExchange(currency) {
    if(currency <= 0) return {};

    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    var obj = {}, counterForH = 0, counterForQ = 0, counterForD = 0, counterForN = 0, counterForP = 0;

    while(currency >= 50) {
        currency -= 50;
        counterForH++;
    }
    if(counterForH) obj.H = counterForH;

    while(currency >= 25) {
        currency -= 25;
        counterForQ++;
    }
    if(counterForQ) obj.Q = counterForQ;

    while(currency >= 10) {
        currency -= 10;
        counterForD++;
    }
    if(counterForD) obj.D = counterForD;

    while(currency >= 5) {
        currency -= 5;
        counterForN++;
    }
    if(counterForN) obj.N = counterForN;

    while(currency >= 1) {
        currency -= 1;
        counterForP++;
    }
    if(counterForP) obj.P = counterForP;

    return obj;
}
