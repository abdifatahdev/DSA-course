
let secret = "1123", guess = "0111"
// output = "1A1B"

const bullsAndCows = (secret, guess) => {
	let bulls = 0, cows = 0; 
	let s = {}, g = {}; 
	for (let i = 0; i < secret.length; i++) {
		if (secret[i] === guess[i]) {
			bulls++; 
		} else {
			s[secret[i]] ? s[secret[i]]++ : s[secret[i]] = 1; 
			g[guess[i]] ? g[guess[i]]++ : g[guess[i]] = 1; 
		}
	}
	for (let k in s) {
		if (g[k]) {
			cows += Math.min(s[k], g[k]); 
		}
	}
	return `${bulls}A${cows}B`; 
}

bullsAndCows(secret, guess)