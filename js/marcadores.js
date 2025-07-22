export function agregarMarcadores(map) {
  const tarija = [-21.5350, -64.7295];

  L.marker(tarija).addTo(map)
    .bindPopup('Tarija (inicio de la peregrinación)')
    .openPopup();
}
