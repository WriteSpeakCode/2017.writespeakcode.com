getSpeakerData = () => {
    var data = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "https://gist.githubusercontent.com/courte/4899ecb6eb8ce0d7e0bedca3a2e7ff0c/raw/5d9b4a408448c02791eedb9c9d731747427c4014/data.json",
        'dataType': "json",
        'success': function (response) {
            data = response;
        }
    });
    return data.speakers;
}

createSpeakerIdString = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
}

linkTwitter = (username) => {
    if (username) {
        return `<li><a href="http://twitter.com/${username}" target="_blank" rel="noopener" class="tips" title="TWITTER"><i class="icon-twitter icon"></i></a></li>`
    }
    return '';
}

linkLinkedin = (alias) => {
    if (alias) {
        return `<li><a href="https://www.linkedin.com/in/${alias}" target="_blank" rel="noopener" class="tips" title="LINKEDIN"><i class="icon-linkedin icon"></i></a></li>`
    }
    return '';
}

linkGithub = (username) => {
    if (username) {
        return `<li><a href="http://github.com/${username}" class="tips" target="_blank" rel="noopener" title="GITHUB"><i class="icon-github icon"></i></a></li>`
    }
    return '';
}

createNameBlock = (name, title, company) => {
    return `
    <h4>${name}</h4>
    <h5>${title}, ${company}</h5>
    `;
}

createSpeakerTile = (speakerId, nameBlock, name) => {
    return `<li class="gridder-list" data-griddercontent="#${speakerId}">
        <img src="./assets/img/speakers/${speakerId}.jpg" alt="${name} headshot" nopin="nopin">
        <div class="name-title">
            ${nameBlock}
        </div>
    </li>`;
}

createSpeakerBioDiv = (speakerId, nameBlock, speakerObj) => {
    const {
        twitter,
        linkedin,
        github,
        bio
    } = speakerObj;

    return `<div id="${speakerId}" class="gridder-content">
    <div class="row between-lg middle-sm">
      <div class="col-xs-12 col-sm-3">
        ${nameBlock}
        <ul class="spkr-social clearfix">
          ${linkTwitter(twitter)}
          ${linkLinkedin(linkedin)}
          ${linkGithub(github)}
        </ul>
      </div>
      <div class="col-xs-12 col-sm-9 col-lg-8">
        <p>${bio}</p>
      </div>
    </div>
  </div>`
}

createSpeakerElements = (speaker) => {
    const {
        name,
        title,
        company
    } = speaker;

    speakerId = createSpeakerIdString(name);
    console.log("speakerId:", speakerId)
    nameBlock = createNameBlock(name, title, company);
    console.log("nameBlock:", nameBlock)

    tile = createSpeakerTile(speakerId, nameBlock, name);
    bio = createSpeakerBioDiv(speakerId, nameBlock, speaker);
    return [tile, bio]
}

loadSpeakers = () => {
    const speakerData = getSpeakerData();

    var speakerTileItems = "";
    var speakerBioItems = "";

    for (speaker of speakerData) {
        [tile, bio] = createSpeakerElements(speaker);
        speakerTileItems += tile;
        speakerBioItems += bio;
    }

    $("#speaker-grid-list").html(speakerTileItems);
    $("#speakers").append(speakerBioItems);
}

$(document).ready(function() {
    loadSpeakers();
});