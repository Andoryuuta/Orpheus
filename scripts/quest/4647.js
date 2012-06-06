/*
 	OrpheusMS: MapleStory Private Server based on OdinMS
    Copyright (C) 2012 Aaron Weiss <aaron@deviant-core.net>
    				Patrick Huy <patrick.huy@frz.cc>
					Matthias Butz <matze@odinms.de>
					Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
*
* @author Blue
*/

var status = -1;

function start(mode, type, selection) {
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.haveItem(5460000)) {
				qm.sendOk("You got the Pet Snack! Thanks! You can use these to feed multiple pets at once!");
				qm.teachSkill(0008, 1, 1);
				qm.gainItem(5460000, -1, false);
				qm.completeQuest();
				qm.dispose();
			} else {
				qm.sendOk("Get me the Pet Snack! It can be found in a very big shop....");
				qm.dispose();
			}
		} else {
			qm.dispose();
		}
	}
}