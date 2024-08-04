// Guessing Game กรอก input
// ถ้ายังไม่ตรงก็เดาเรื่อยๆ จนกว่าจะถูก
// แต่ถ้าเดายังไงก็ไม่ได้ สามารถ Quit ออกได้

const maxNum = prompt("Please enter maximum number.") // ทำ prompt ให้กรอกค่า max ที่จะให้เดาได้ก่อน

const targetNum = Math.floor(Math.random() * maxNum) // ให้มันสุ่มเลขโดยเอาค่า max เราไปคูณ

console.log(targetNum, "<< targetNum"); // ให้มัน log คำตอบว่า target num ที่มันสุ่มคือเท่าไหร่

let guess = prompt("Enter your first answer.") // สร้าง prompt ให้ใส่คำตอบแรก

let attempts = 1; // ตัวแปรสำหรับใส่ค่าว่าใส่คำตอบไปกี่ครั้ง


while (maxNum != targetNum) {
    
    attempts += 1; // เอาตัวแปรใส่คำตอบมา +1 ทุกครั้งที่มีการกรอกเข้ามา
    
    if (guess == "q") { // ถ้ากรอก q มันจะ break ออกเลย แล้ว alert ว่าเราออกจากการเดา
        alert("OK, you quit.")
        break;
    } else if (guess > targetNum) { // ถ้าค่าที่ใส่มามากกว่าคำตอบ ให้ prompt ว่า มากไป ให้ใส่ใหม่
        guess = prompt("Too high, enter a new answer.")
    } else if (guess < targetNum) { // ถ้าค่าที่ใส่มาน้อยกว่าคำตอบ ให้ prompt ว่า น้อยไป ให้ใส่ใหม่
        guess = prompt("Too low, enter a new answer.")
    } else { // นอกเหนือจาก q, มากกว่า, น้อยกว่า แปลว่าตอบถูก ให้ alert ว่าตอบถูก ทายไปทั้งหมดกี่ครั้ง แล้ว break
        alert(`You got it! It took you ${attempts} times of guessing`)
        break;
    }
}

