const palavras = [
    "abus","acident","acusa","adult","aglomerac","agred","agress","agrid","agu","ai",
    "alckmin","alcolumbre","alcool","ambienta","andrade","apavora","apost","aras",
    "arma","arnaud","assalt","assassin","assed","assust","atacad","ataque","atentado",
    "ato","atraente","atropel","azar","banco","bandid","barroso","bb","bdsm","bet",
    "bingo","biquini","blackjack","bolsogado","bolsolao","bolsomi","bolsonar","bomba",
    "bondage","braga","branca","briga","brumadinho","brut","brutal","bumbu","caca niquel",
    "cachaca","cachimbo","cadaver","cadeia","caixa","calcinha","calibre","camara","camisinha",
    "cancer","carcere","cartao","cassa","cassino","cdb","cef","cenas","cerveja","cgu","charuto",
    "chico","china","ciberataque","cigarr","ciro","cirurgia","cloroquina","coaf","cocaina",
    "colad","complicac","comunicacao","comunis","comunista","conar","concentracao","condenad",
    "confus","congresso","conhaque","conservad","conteudo","contraband","corona","corpao","corpo",
    "corporativo","corrup","covas","covid","cpi","crack","cracolandia","crianca","crime","crimi",
    "cueca","culposo","culto","dallagnol","damares","decotelli","deltan","dependencia","dependente",
    "depoimento","depor","deputad","desastr","desmata","detent","ditadura","do tomate","doenca",
    "doll","doloso","doria","download","droga","duarte","economi","ecstasy","elcio","emergencia",
    "enterr","erecao","eroti","escalonad","escrav","esfaquea","espada","espanc","espancad","esperma",
    "esportebet","esportesbet","estado","estupr","eutanasia","evangeli","execu","exib","experiment",
    "explod","explor","explos","extrem","faca","facada","fake","fals","familia","faquea","fascismo",
    "fascist","fayad","federa","feminicid","ferid","feriment","ficha","fila","filho 0","fiocruz",
    "flavio","flordelis","florestal","fnde","fobia","fogo","foragid","franco","fratura","freitas",
    "frias","funera","fuzi","genocid","ghosn","glen","golp","gomes","govern","greenwald","grita",
    "grup","guedes","guerra","hamilton","henrique","hezbollah","homicidi","hospita","igreja","ilega",
    "impeachment","imposto","inacio","incendi","inflac","infrator","internac","investigac","investiment",
    "iptv","islamic","italia","itamaraty","jair","jato","jogo do bicho","julgamento","justica","kamasutra",
    "kiko","ladra","lanca perfume","laudo","lei","lewandowski","liberalis","licor","lockdown","lopes",
    "loteria","lsd","lula","luto","maconha","maia","mandetta","manifestac","marielle","mario","masturb",
    "mata","materia","matou","mauricio","mdb","medicamento","medo","mendonca","menor","metralha","michelle",
    "micro","ministerio","ministr","missa","monkeypox","moro","morre","mort","mourao","munic",
    "mutilad","naciona","nardoni","narguile","nazis","netto","news","nicotina","nogueira","notici","novaes",
    "nsfw","nsfw","nu","nua","nudes","nudez","nunes","ofend","ofens","opera","orgas","orgia","osmar","padre",
    "pai","pandemia","panic","pastor","pateta","pazuello","pcc","pedofil","perfume","pesca","pf","pgr","pib","picant","pinga",
    "pirataria","poker","polemic","policia","poluic","ponte","poquer","porn","posa","posic","predado","predia","prefeit","prende",
    "president","preso","prevari","princes","principe","pris","prostitu","psl","pt","punh","qaeda","quadrilh","quarentena",
    "queimad","queiroz","quimic","racis","rainha","ramage","ramos","rci","reaciona","rei","relac","religi","remedio",
    "renuncia","republica","respirad","revolver","rinha","rodeio","rodrigues","rolando","roleta","rosseti",
    "roub","roubad","rubem","sacrific","samy","santos","saque","sara","seca","secom","secretaria","seio","senad",
    "sensua","separatist","sepult","sequest","serra","sex","sexo","sexua","sexy","silvio","sitter",
    "socialismo","soneg","sos","sportingbet","stf","suicid","supremo","surto","sus","suspeit","swing",
    "tcu","teich","tercio","terremot","terroris","teste","tiro","toffolli","toga","tomaz","torrent","tortur","trabalho forcado",
    "trae","trafic","tragedia","trai","transa","transparente","tribuna","uisque","vacina","valeixo","valente","vaquejada",
    "variola","vereador","viana","vibrador","vice","vinho","violac","violad","violen","virada","virus","vitima","viuv","viva",
    "vivo","vodka","wajngarten","whisky","wilson","winter","witzel","zambelli","zema"
  ].map(palavra => palavra.toLowerCase());

function encontrarPalavras(paragrafo, palavras) {
  const textoParagrafo = paragrafo.textContent.toLowerCase();
  let resultado = {
    contagem: 0,
    palavrasEncontradas: []
  };

  palavras.forEach(palavra => {
    const regex = new RegExp(`\\b${palavra}\\b`, 'g');
    const ocorrencias = textoParagrafo.match(regex);
    if (ocorrencias) {
      resultado.contagem += ocorrencias.length;
      resultado.palavrasEncontradas.push({
        palavra: palavra,
        quantidade: ocorrencias.length
      });
    }
  });

  return resultado;
}

const paragrafos = document.querySelectorAll('p');
const paragrafosEncontrados = [];

paragrafos.forEach(paragrafo => {
  const resultado = encontrarPalavras(paragrafo, palavras);
  if (resultado.contagem > 0) {
    paragrafosEncontrados.push({
      texto: paragrafo.textContent,
      contagem: resultado.contagem,
      palavrasEncontradas: resultado.palavrasEncontradas
    });
  }
});

if (paragrafosEncontrados.length > 0) {
  console.log("Parágrafos encontrados:");
  paragrafosEncontrados.forEach(paragrafo => {
    console.log(`Texto: ${paragrafo.texto}`);
    console.log(`Número total de palavras encontradas: ${paragrafo.contagem}`);
    paragrafo.palavrasEncontradas.forEach(palavraInfo => {
      console.log(`Palavra: ${palavraInfo.palavra}, Quantidade: ${palavraInfo.quantidade}`);
    });
  });
} else {
  console.log("Nenhum parágrafo contém as palavras especificadas.");
}
