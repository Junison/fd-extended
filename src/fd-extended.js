// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function() {
	//$('.train_info').find('dl').append("<dt>강화능력치</dt>");
	appendToggleEnhancedAbility();
});

function appendToggleEnhancedAbility() {
	var html = "";
	html += "<dt>강화능력치</dt>";
	html += "<dl></dl>";
	$('.train_info').find('dl').append(html);
}
