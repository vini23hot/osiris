import { storiesOf } from '@storybook/vue';

storiesOf('Icons', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .add('default', () => ({
    template: `<div>
      <i class="o-icon o-icon-alert-octagon"></i>
      <i class="o-icon o-icon-alert-circle"></i>
      <i class="o-icon o-icon-activity"></i>
      <i class="o-icon o-icon-alert-triangle"></i>
      <i class="o-icon o-icon-align-center"></i>
      <i class="o-icon o-icon-airplay"></i>
      <i class="o-icon o-icon-align-justify"></i>
      <i class="o-icon o-icon-align-left"></i>
      <i class="o-icon o-icon-align-right"></i>
      <i class="o-icon o-icon-arrow-down-left"></i>
      <i class="o-icon o-icon-arrow-down-right"></i>
      <i class="o-icon o-icon-anchor"></i>
      <i class="o-icon o-icon-aperture"></i>
      <i class="o-icon o-icon-arrow-left"></i>
      <i class="o-icon o-icon-arrow-right"></i>
      <i class="o-icon o-icon-arrow-down"></i>
      <i class="o-icon o-icon-arrow-up-left"></i>
      <i class="o-icon o-icon-arrow-up-right"></i>
      <i class="o-icon o-icon-arrow-up"></i>
      <i class="o-icon o-icon-award"></i>
      <i class="o-icon o-icon-bar-chart"></i>
      <i class="o-icon o-icon-at-sign"></i>
      <i class="o-icon o-icon-bar-chart-"></i>
      <i class="o-icon o-icon-battery-charging"></i>
      <i class="o-icon o-icon-bell-off"></i>
      <i class="o-icon o-icon-battery"></i>
      <i class="o-icon o-icon-bluetooth"></i>
      <i class="o-icon o-icon-bell"></i>
      <i class="o-icon o-icon-book"></i>
      <i class="o-icon o-icon-briefcase"></i>
      <i class="o-icon o-icon-camero-off"></i>
      <i class="o-icon o-icon-calendar"></i>
      <i class="o-icon o-icon-bookmark"></i>
      <i class="o-icon o-icon-box"></i>
      <i class="o-icon o-icon-camera"></i>
      <i class="o-icon o-icon-check-circle"></i>
      <i class="o-icon o-icon-check"></i>
      <i class="o-icon o-icon-check-square"></i>
      <i class="o-icon o-icon-cast"></i>
      <i class="o-icon o-icon-chevron-down"></i>
      <i class="o-icon o-icon-chevron-left"></i>
      <i class="o-icon o-icon-chevron-right"></i>
      <i class="o-icon o-icon-chevron-up"></i>
      <i class="o-icon o-icon-chevrons-down"></i>
      <i class="o-icon o-icon-chevrons-right"></i>
      <i class="o-icon o-icon-chevrons-up"></i>
      <i class="o-icon o-icon-chevrons-left"></i>
      <i class="o-icon o-icon-circle"></i>
      <i class="o-icon o-icon-clipboard"></i>
      <i class="o-icon o-icon-chrome"></i>
      <i class="o-icon o-icon-clock"></i>
      <i class="o-icon o-icon-cloud-lightning"></i>
      <i class="o-icon o-icon-cloud-drizzle"></i>
      <i class="o-icon o-icon-cloud-rain"></i>
      <i class="o-icon o-icon-cloud-off"></i>
      <i class="o-icon o-icon-codepen"></i>
      <i class="o-icon o-icon-cloud-snow"></i>
      <i class="o-icon o-icon-compass"></i>
      <i class="o-icon o-icon-copy"></i>
      <i class="o-icon o-icon-corner-down-right"></i>
      <i class="o-icon o-icon-corner-down-left"></i>
      <i class="o-icon o-icon-corner-left-down"></i>
      <i class="o-icon o-icon-corner-left-up"></i>
      <i class="o-icon o-icon-corner-up-left"></i>
      <i class="o-icon o-icon-corner-up-right"></i>
      <i class="o-icon o-icon-corner-right-down"></i>
      <i class="o-icon o-icon-corner-right-up"></i>
      <i class="o-icon o-icon-cpu"></i>
      <i class="o-icon o-icon-credit-card"></i>
      <i class="o-icon o-icon-crosshair"></i>
      <i class="o-icon o-icon-disc"></i>
      <i class="o-icon o-icon-delete"></i>
      <i class="o-icon o-icon-download-cloud"></i>
      <i class="o-icon o-icon-download"></i>
      <i class="o-icon o-icon-droplet"></i>
      <i class="o-icon o-icon-edit-"></i>
      <i class="o-icon o-icon-edit"></i>
      <i class="o-icon o-icon-edit-1"></i>
      <i class="o-icon o-icon-external-link"></i>
      <i class="o-icon o-icon-eye"></i>
      <i class="o-icon o-icon-feather"></i>
      <i class="o-icon o-icon-facebook"></i>
      <i class="o-icon o-icon-file-minus"></i>
      <i class="o-icon o-icon-eye-off"></i>
      <i class="o-icon o-icon-fast-forward"></i>
      <i class="o-icon o-icon-file-text"></i>
      <i class="o-icon o-icon-film"></i>
      <i class="o-icon o-icon-file"></i>
      <i class="o-icon o-icon-file-plus"></i>
      <i class="o-icon o-icon-folder"></i>
      <i class="o-icon o-icon-filter"></i>
      <i class="o-icon o-icon-flag"></i>
      <i class="o-icon o-icon-globe"></i>
      <i class="o-icon o-icon-grid"></i>
      <i class="o-icon o-icon-heart"></i>
      <i class="o-icon o-icon-home"></i>
      <i class="o-icon o-icon-github"></i>
      <i class="o-icon o-icon-image"></i>
      <i class="o-icon o-icon-inbox"></i>
      <i class="o-icon o-icon-layers"></i>
      <i class="o-icon o-icon-info"></i>
      <i class="o-icon o-icon-instagram"></i>
      <i class="o-icon o-icon-layout"></i>
      <i class="o-icon o-icon-link-"></i>
      <i class="o-icon o-icon-life-buoy"></i>
      <i class="o-icon o-icon-link"></i>
      <i class="o-icon o-icon-log-in"></i>
      <i class="o-icon o-icon-list"></i>
      <i class="o-icon o-icon-lock"></i>
      <i class="o-icon o-icon-log-out"></i>
      <i class="o-icon o-icon-loader"></i>
      <i class="o-icon o-icon-mail"></i>
      <i class="o-icon o-icon-maximize-"></i>
      <i class="o-icon o-icon-map"></i>
      <i class="o-icon o-icon-maximize"></i>
      <i class="o-icon o-icon-map-pin"></i>
      <i class="o-icon o-icon-menu"></i>
      <i class="o-icon o-icon-message-circle"></i>
      <i class="o-icon o-icon-message-square"></i>
      <i class="o-icon o-icon-minimize-"></i>
      <i class="o-icon o-icon-mic-off"></i>
      <i class="o-icon o-icon-minus-circle"></i>
      <i class="o-icon o-icon-mic"></i>
      <i class="o-icon o-icon-minus-square"></i>
      <i class="o-icon o-icon-minus"></i>
      <i class="o-icon o-icon-moon"></i>
      <i class="o-icon o-icon-monitor"></i>
      <i class="o-icon o-icon-more-vertical"></i>
      <i class="o-icon o-icon-more-horizontal"></i>
      <i class="o-icon o-icon-move"></i>
      <i class="o-icon o-icon-music"></i>
      <i class="o-icon o-icon-navigation-"></i>
      <i class="o-icon o-icon-navigation"></i>
      <i class="o-icon o-icon-octagon"></i>
      <i class="o-icon o-icon-package"></i>
      <i class="o-icon o-icon-pause-circle"></i>
      <i class="o-icon o-icon-pause"></i>
      <i class="o-icon o-icon-percent"></i>
      <i class="o-icon o-icon-phone-call"></i>
      <i class="o-icon o-icon-phone-forwarded"></i>
      <i class="o-icon o-icon-phone-missed"></i>
      <i class="o-icon o-icon-phone-off"></i>
      <i class="o-icon o-icon-phone-incoming"></i>
      <i class="o-icon o-icon-phone"></i>
      <i class="o-icon o-icon-phone-outgoing"></i>
      <i class="o-icon o-icon-pie-chart"></i>
      <i class="o-icon o-icon-play-circle"></i>
      <i class="o-icon o-icon-play"></i>
      <i class="o-icon o-icon-plus-square"></i>
      <i class="o-icon o-icon-plus-circle"></i>
      <i class="o-icon o-icon-plus"></i>
      <i class="o-icon o-icon-pocket"></i>
      <i class="o-icon o-icon-printer"></i>
      <i class="o-icon o-icon-power"></i>
      <i class="o-icon o-icon-radio"></i>
      <i class="o-icon o-icon-repeat"></i>
      <i class="o-icon o-icon-refresh-ccw"></i>
      <i class="o-icon o-icon-rewind"></i>
      <i class="o-icon o-icon-rotate-ccw"></i>
      <i class="o-icon o-icon-refresh-cw"></i>
      <i class="o-icon o-icon-rotate-cw"></i>
      <i class="o-icon o-icon-save"></i>
      <i class="o-icon o-icon-search"></i>
      <i class="o-icon o-icon-server"></i>
      <i class="o-icon o-icon-scissors"></i>
      <i class="o-icon o-icon-share-"></i>
      <i class="o-icon o-icon-share"></i>
      <i class="o-icon o-icon-shield"></i>
      <i class="o-icon o-icon-settings"></i>
      <i class="o-icon o-icon-skip-back"></i>
      <i class="o-icon o-icon-shuffle"></i>
      <i class="o-icon o-icon-sidebar"></i>
      <i class="o-icon o-icon-skip-forward"></i>
      <i class="o-icon o-icon-slack"></i>
      <i class="o-icon o-icon-slash"></i>
      <i class="o-icon o-icon-smartphone"></i>
      <i class="o-icon o-icon-square"></i>
      <i class="o-icon o-icon-speaker"></i>
      <i class="o-icon o-icon-star"></i>
      <i class="o-icon o-icon-stop-circle"></i>
      <i class="o-icon o-icon-sun"></i>
      <i class="o-icon o-icon-sunrise"></i>
      <i class="o-icon o-icon-tablet"></i>
      <i class="o-icon o-icon-tag"></i>
      <i class="o-icon o-icon-sunset"></i>
      <i class="o-icon o-icon-target"></i>
      <i class="o-icon o-icon-thermometer"></i>
      <i class="o-icon o-icon-thumbs-up"></i>
      <i class="o-icon o-icon-thumbs-down"></i>
      <i class="o-icon o-icon-toggle-left"></i>
      <i class="o-icon o-icon-toggle-right"></i>
      <i class="o-icon o-icon-trash-"></i>
      <i class="o-icon o-icon-trash"></i>
      <i class="o-icon o-icon-trending-up"></i>
      <i class="o-icon o-icon-trending-down"></i>
      <i class="o-icon o-icon-triangle"></i>
      <i class="o-icon o-icon-type"></i>
      <i class="o-icon o-icon-twitter"></i>
      <i class="o-icon o-icon-upload"></i>
      <i class="o-icon o-icon-umbrella"></i>
      <i class="o-icon o-icon-upload-cloud"></i>
      <i class="o-icon o-icon-unlock"></i>
      <i class="o-icon o-icon-user-check"></i>
      <i class="o-icon o-icon-user-minus"></i>
      <i class="o-icon o-icon-user-plus"></i>
      <i class="o-icon o-icon-user-x"></i>
      <i class="o-icon o-icon-user"></i>
      <i class="o-icon o-icon-users"></i>
      <i class="o-icon o-icon-video-off"></i>
      <i class="o-icon o-icon-video"></i>
      <i class="o-icon o-icon-voicemail"></i>
      <i class="o-icon o-icon-volume-x"></i>
      <i class="o-icon o-icon-volume-"></i>
      <i class="o-icon o-icon-volume-1"></i>
      <i class="o-icon o-icon-volume"></i>
      <i class="o-icon o-icon-watch"></i>
      <i class="o-icon o-icon-wifi"></i>
      <i class="o-icon o-icon-x-square"></i>
      <i class="o-icon o-icon-wind"></i>
      <i class="o-icon o-icon-x"></i>
      <i class="o-icon o-icon-x-circle"></i>
      <i class="o-icon o-icon-zap"></i>
      <i class="o-icon o-icon-zoom-in"></i>
      <i class="o-icon o-icon-zoom-out"></i>
      <i class="o-icon o-icon-command"></i>
      <i class="o-icon o-icon-cloud"></i>
      <i class="o-icon o-icon-hash"></i>
      <i class="o-icon o-icon-headphones"></i>
    </div>
    `,
  }));
