from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

nums = list(range(1,90+1)) # inizializza lista dei numeri
estratti = list()
desc = {
    1: "L'Italia",
    2: "'A criatura (il bimbo)",
    3: "'A jatta (il gatto)",
    4: "'O puorco (il maiale)",
    5: "'A mano (la mano)",
    6: "Chella che guarda 'nterra (organo sessuale femminile)",
    7: "'A scuppetta (il fucile)",
    8: "'A maronna (la madonna)",
    9: "'A figliata (la prole)",
    10: "'E fasule (i fagioli)",
    11: "'E surice (i topi)",
    12: "'E surdate (i soldati)",
    13: "Sant' Antonio",
    14: "'O mbriaco (l'ubriaco)",
    15: "'O guaglione (il ragazzo)",
    16: "'O culo (il deretano)",
    17: "'A disgrazia (la disgrazia)",
    18: "'O sanghe (il sangue)",
    19: "'A resata (la risata)",
    20: "'A festa (la festa)",
    21: "'A femmena annura (la donna nuda)",
    22: "'O pazzo (il pazzo)",
    23: "'O scemo (lo scemo)",
    24: "'E gguardie (le guardie)",
    25: "Natale",
    26: "Nanninella (diminuitivo del nome Anna)",
    27: "'O cantero (il vaso da notte)",
    28: "'E zzizze (il seno)",
    29: "'O pate d''e criature (organo sessuale maschile)",
    30: "'E palle d''o tenente (le palle del tenente, riferito all'organo sessuale maschile)",
    31: "'O padrone 'e casa (il proprietario di casa)",
    32: "'O capitone (il capitone)",
    33: "L'anne 'e Cristo (gli anni di Cristo)",
    34: "'A capa (la testa)",
    35: "L'aucielluzzo (l'uccellino)",
    36: "'E castagnelle (sorta di petardi)",
    37: "'O monaco (il frate)",
    38: "'E mmazzate (le botte)",
    39: "'A funa 'nganna (la corda al collo)",
    40: "'A paposcia (ernia inguinale)",
    41: "'O curtiello (il coltello)",
    42: "'O ccafè (il caffè)",
    43: "'A femmena 'ncopp'' o balcone (la donna al balcone)",
    44: "'E ccancelle (il carcere)",
    45: "'O vino (il vino)",
    46: "'E denare (i denari)",
    47: "'O muorto (il morto)",
    48: "'O muorto che parla (il morto che parla)",
    49: "'O piezzo 'e carne (il pezzo di carne)",
    50: "'O ppane (il pane)",
    51: "'O ciardino (il giardino)",
    52: "'A mamma (la mamma)",
    53: "'O viecchio (il vecchio)",
    54: "'O cappiello (il cappello)",
    55: "'A museca (la musica)",
    56: "'A caruta (la caduta)",
    57: "'O scartellato (il gobbo)",
    58: "'O paccotto (imbroglio)",
    59: "'E pile (i peli)",
    60: "Se lamenta (si lamenta)",
    61: "'O cacciatore (il cacciatore)",
    62: "'O muorto acciso (il morto ammazzato)",
    63: "'A sposa (la sposa)",
    64: "'A sciammeria (la marsina)",
    65: "'O chianto (il pianto)",
    66: "'E ddoie zetelle (le due zitelle)",
    67: "'O totano int''a chitarra (il totano nella chitarra)",
    68: "'A zuppa cotta (la zuppa cotta)",
    69: "Sott'e'ncoppo (sottosopra)",
    70: "'O palazzo (il palazzo)",
    71: "L'ommo 'e merda (l'uomo senza princìpi)",
    72: "'A meraviglia (la meraviglia)",
    73: "'O spitale (l'ospedale)",
    74: "'A rotta (la grotta)",
    75: "Pullecenella (Pulcinella)",
    76: "'A funtana (la fontana)",
    77: "'E diavule (i diavoli)",
    78: "'A bella figliola (la bella ragazza)",
    79: "'O mariuolo (il ladro)",
    80: "'A vocca (la bocca)",
    81: "'E sciure (i fiori)",
    82: "'A tavula 'mbandita (la tavola imbandita)",
    83: "'O maletiempo (il maltempo)",
    84: "'A cchiesa (la chiesa)",
    85: "Ll'aneme 'o priatorio (le anime del purgatorio)",
    86: "'A puteca (il negozio)",
    87: "'E perucchie (i pidocchi)",
    88: "'E casecavalle (i caciocavalli)",
    89: "'A vecchia (la vecchia)",
    90: "'A paura (la paura)"
}

@app.route('/')
def index():
    return render_template('index.html', estratti=estratti, desc=desc)

@app.route('/estrazione', methods=['POST'])
def estrazione():
    global nums, estratti
    if not nums:
        return jsonify({
            "message": "Tutti i numeri sono stati estratti!",
            "game_over": True
        })

    num_estratto = random.choice(nums)
    nums.remove(num_estratto)
    estratti.append(num_estratto)

    return jsonify({
        "num_estratto": num_estratto,
        "desc": desc[num_estratto],
        "estratti_recenti": estratti[-5:],
        "game_over": False
    })

@app.route('/reset', methods=['POST'])
def reset():
    global nums, estratti
    nums = list(range(1, 91))  # Ripristina tutti i numeri
    estratti = []  # Svuota gli estratti
    return jsonify({"message": "E' iniziata una nuova partita"})

if __name__ == '__main__':
    app.run(debug=True)