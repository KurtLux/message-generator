const problemas = ['diarréia', 'prisão de ventre', 'flatulência', 'impotência',
'unha encravada', 'dor nas juntas', 'mau olhado', 'possuído(a) pelo demo',
'coceira no cu', 'azar no jogo'];

const agente1 = ['Teta', 'Testa', 'Lua', 'Xana', 'Pica', 'Mão','Pipoca', 
'Lágrima', 'Unha', 'Espinha'];

const agente2 = ['Grande', 'Berta', 'Podre', 'Suprema', 'Latejante', 'Vermelha', 
'Caída', 'Brilhante', 'Baranga', 'Molhada'];

const terapia = ['Reiki Quântico', 'Constelação Familiar Sistêmica', 'Tarot Terapêutico'
, 'Fitoenegética','Radiestesi e Radiônica', 'Registros Akáshicos', 'ThetaHealing',
'Barras de Access Consciousness', 'Access Consciousness', 'Coach Holístico Quântico'];

const futuro = ['dinheiro', 'dor no cu', 'gratidão', 'bicho de pé', 'corrimento',
'cheiro na virilha', 'alegria de viver', 'tesão', 'vermes', 'pêlos no olho'];

function rnd(array) {
    return(array[Math.floor(Math.random() * array.length)])};

let result = `Se você está com ${rnd(problemas)} ou ${rnd(problemas)} fale com Mãe 
${rnd(agente1)} ${rnd(agente2)} especialista em ${rnd(terapia)} para acabar com seu 
sofrimento e melhorar sua qualidade de vida. Garantimos que
você nunca mais terá ${rnd(futuro)}.`

console.log(result);
    