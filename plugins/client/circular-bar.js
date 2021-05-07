
export default (context, inject) => {
  var circularBar = () => {
    easyPieChart({
      barColor: $color_primary,
      trackColor: $track_color,
      lineCap: $track_line_cap,
      lineWidth: 8,
      size: 90,
      scaleLength: 0
    });
  }
  inject('circularBar', circularBar)
}
