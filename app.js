// Lokata: procent składany + podatek Belki 19%.
(function () {
  'use strict';
  function fmt(n) {
    return (Math.round(n * 100) / 100).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  function render() {
    var P = +document.getElementById('kw').value || 0;
    var r = (+document.getElementById('op').value || 0) / 100;
    var ms = Math.max(1, Math.min(120, +document.getElementById('ms').value || 12));
    var coIle = +document.getElementById('kap').value;
    var okresy = ms / coIle, q = r * coIle / 12;
    var koncowe = P * Math.pow(1 + q, okresy);
    var brutto = koncowe - P;
    var netto = brutto * 0.81;
    document.getElementById('out').textContent = P > 0 ? '+' + fmt(netto) + ' zł na czysto' : '—';
    document.getElementById('detail').textContent = P > 0 ?
      'Zysk brutto: ' + fmt(brutto) + ' zł, podatek Belki (19%): ' + fmt(brutto - netto) +
      ' zł. Na koniec: ' + fmt(P + netto) + ' zł. Bez opłat za konto.' : '';
  }
  ['kw', 'op', 'ms', 'kap'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', render);
  });
  render();
})();
