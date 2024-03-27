export default function customVimeoPlayer() {
  window.addEventListener("load", () => {
    // Loop through each custom video section
    $("[custom-video-section]").each(function () {
      // Select the iframe within the current section
      const iframe = $("[custom-video-iframe]", this)[0];

      // Create a new Vimeo player for the current iframe
      const player = new Vimeo.Player(iframe);

      $(".video-play-pause-wrapper").hide();
      $("[vimeo=play]").hide();

      // Bind click events to control buttons with vimeo attributes
      $("[vimeo=unmute]", this).click(function () {
        player.setMuted(false); // Unmute
        $(this).hide(); // Hide Unmute Only targeting this button
        $(this).parent().find(".video-play-pause-wrapper").show(); //show .video-play-pause-wrapper but only this player's button not all
      });

      // Hide play button and show pause button, but only this player's button not all
      $("[vimeo=play]", this).click(function () {
        player.setMuted(false); // Play video
        $(this).hide(); // Hide play button
        $(this).parent().find("[vimeo=pause]").show(); //show .video-play-pause-wrapper but only this player's button not all
      });

      $("[vimeo=pause]", this).click(function () {
        player.setMuted(true); // Pause video
        $(this).hide(); // Hide pause button
        $(this).parent().find("[vimeo=play]").show(); //show .video-play-pause-wrapper but only this player's button not all
      });
    });
  });
}
