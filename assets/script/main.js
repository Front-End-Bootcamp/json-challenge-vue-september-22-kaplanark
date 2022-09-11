// kulanacağımız datayı import ediyoruz
import data from "./../json/data.json";

// grup ismine göre datayı filtreliyoruz ve reorganize fonksiyonuna gönderiyoruz eğer böyle bir grup yoksa bilgi veriyoruz
const getGroups = (data, groupName) => {
	const groupMembers = data.filter((item) => item.group === groupName); // grup ismine göre datayı filtreliyoruz
	if (groupMembers.length > 0) {
		return getGroup(groupMembers, groupName); // getGroup fonksiyonuna gönderiyoruz
	}
	console.log('Bu grup için veri yok'); // eğer böyle bir grup yoksa bilgi veriyoruz
}

// getGroup fonksiyonu datayı grup ismine göre reorganize ediyor
const getGroup = (groupMembers, groupName) => {
	// yeni bir data objesi oluşturuyoruz
	const newData = {
		group: groupName, // grup ismini atıyoruz
		assistant: groupMembers.find((member) => member.type === 'assistant').name, // asistanı buluyoruz
		students: groupMembers.map((member) => member.type != 'assistant' ? member.name : null).filter((name) => name != null)
		// burda asistanı hariç tuttmak için type kontrolü yapıyoruz ve asistan adına null atıyoruz ardından null olanları filtreleyip students arrayine atıyoruz
	}
	console.log(newData); // yeni datayı yazdırıyoruz
}
getGroups(data, 'SteelBlue'); // data ile SteelBlue grup ismini getGroup fonksiyonuna gönderiyoruz