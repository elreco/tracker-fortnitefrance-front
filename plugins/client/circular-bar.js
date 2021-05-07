
export default (context, inject) => {
  var initCircularBar = () => {
    var $color_primary = '#2575DC';
    var $track_color = '#4b3b60';
    var $track_line_cap = 'round';

    $('.circular__bar').easyPieChart({
      barColor: $color_primary,
      trackColor: $track_color,
      lineCap: $track_line_cap,
      lineWidth: 8,
      size: 90,
      scaleLength: 0
    });
  }
  inject('initCircularBar', initCircularBar)
}
