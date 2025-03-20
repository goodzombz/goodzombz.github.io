const questions = [
    "מהם שלושת חלקי האישיות על פי התאוריה של פרויד?",
    "מהו 'הלא-מודע' (תת מודע) לפי התאוריה של פרויד?",
    "מהו השלב הרביעי בתאוריית ההתפתחות הפסיכו-סקסואלית של פרויד?",
    "נועם בן ה-4 מתעקש לקחת צעצועים מהגן, גם כשהגננת מסבירה לו שזה לא מנומס. על פי פרויד, איזה חלק בחלקי האישיות שולט בהתנהגותו ומדוע?",
    "רועי בן ה-5 מתחיל לגלות עניין באמו ומתנהג בקנאה כלפי אביו. על פי התאוריה של פרויד, באיזה שלב התפתחותי רועי נמצא ומה ההסבר לתופעה זאת?",
    "עידו הוא אדם מבוגר שמאוד מסודר וקפדן, אשר לפעמים קצת עקשן בכל הנושא של סדר וניקיון. על פי תאורייתו הפסיכוסקסואלית של פרוייד, איזה שלב השפיע על ההתנהגות הבוגרת שלו ואיך?",
    "גיל חולם מדי פעם על כך שהוא מגיע לבית ספר באיחור שהתלמידים לכיתה צוחקים עליו. כאשר הוא מתעורר הוא לא מבין למה הוא חולם על זה מכיוון שאינו מרגיש חשש מאיחור או מאי נוחות מהתלמידים. לפי התאוריה של פרויד, כיצד ניתן לפרש את החלום של גיל?",
    "דניאל מתקשה לקבל החלטות חשובות ונוטה להתלבט זמן רב לפני כל החלטה בחייו. הוא טוען שהוא פוחד מהשכלות של בחירה של החלטה שגויה. כיצד פרויד היה מסביר התנהגות זאת?",
    "אורן הולך לבד ברחוב חשוך בשעת לילה מאוחרת, כעבור כמה דקות של הליכה הוא שומע צעדים מאחוריו ומתחיל להרגיש דופק מואץ והזעה. עד שמגיע לביתו הוא כל כמה שניות מסתכל אחורה כדי לוודא שאין אף אחד מאחוריו. לפי התאוריה של פרויד, איזה סוג חרדה חווה אורן?",
    "מאור נמצא במערכת יחסים כבר כמה חודשים, כאשר הוא אוהב את בת זוגתו אך מרגיש שלפעמים הוא לא מרוצה ממנו ומחפש תשומת לב מנשים אחרות. מצד אחד מאור לא רוצה לפגוע במערכת היחסים שלו עם בת זוגתו אבל מצד שני הוא מרגיש דחף חזק להשיג תשומת לב ומגע מאנשים אחרים. כיצד ניתן להסביר את הדילמה שבו נמצא מאור על פי התאוריה של פרויד?",
    "מהו עקרון המוסר? תנו דוגמה למשהו שעקרון המוסר משפיע עליו.",
    "מהו קיבעון ואיך אדם עשוי לפתח קיבעון?",
    "מהם ההבדלים בין הלא מודע למודע?",
    "תינוק בשלב האורלי לא מקבל את היחס התואם את השלב מהוריו, הוא כל הזמן בוכה והם לא יודעים מה לעשות. הסבירו איזה יחס הוא צריך לקבל, הסבירו מה קורה בשלב זה, ומה יקרה אם הוא לא יקבל את היחס הנכון/מה יקרה אם הוא לא יצליח לפתור את השלב.",
    "נדב שיחק עם קבוצתו במשחק כדורגל נגד קבוצה יריבה, נדב וקבוצתו ניצחו במשחק. לפי מודל חלקי האישיות של פרויד, איך הם ירגישו לפי האני העליון ומהו האני העליון?",
    "איתן בן ה-20 חל לאחרונה שהוא מוכן לזוגיות, הוא מוצא את עצמו מעוניין בקשר שנבנה על בסיס של אמון, קשר אינטימי והבנה הדדית. באיזה שלב בתיאוריה של פרויד נמצא איתן?",
    "יובל בן ה-8 מקבל שבחים על עזרה לחברים, אך חושש מכישלון במשימות מסוימות. באיזה שלב פסיכוסקסואלי הוא נמצא, ומה המשמעות של שלב זה?",
    "מיכל התכוננה לפרזנטציה, אך בבוקר האירוע חשה פתאום חרדה בלתי מוסברת. כיצד ניתן להסביר זאת לאור המאבק בין המודע ללא מודע לפי פרויד?",
    "מיה, עורכת דין צעירה, הרגישה מאבק פנימי בעבודתה. היא רצתה להתקדם, אך היו לה דחפים לא מודעים להימנע מעימותים ולפעמים תחושות אשמה לגבי החלטות קשות. כיצד הדחפים הלא-מודעים של מיה משפיעים על ההתנהגות שלה בעבודתה?",
    "רות, עורכת דין מצליחה, מצאה את עצמה מתמודדת עם דילמה מוסרית בעבודתה. היא ייצגה לקוח שמעורב במקרה רגיש, ורצתה להצליח ולהשיג את טובת הלקוח. אך היא התלבטה, היא לא יכלה להימנע מהמחשבה על ההשלכות המוסריות של ההגנה על אדם שחושבת שהוא לא בנכון. תחושת הבלבול והמנוגדות גרמה לה לאי-נוחות פנימית. מהו הקונפליקט שרות חווה?"
];
class Checkers {
    constructor() {
        this.board = [];
        this.selectedPiece = null;
        this.currentTurn = 'B';
        this.askedQuestions = [];
        this.capturePending = false;
        this.pendingMove = null;
        this.midPiecePosition = null;
        this.initializeBoard();
        this.createBoardUI();
    }

    initializeBoard() {
        for (let row = 0; row < 8; row++) {
            this.board[row] = [];
            for (let col = 0; col < 8; col++) {
                if ((row + col) % 2 === 1) {
                    if (row < 3) {
                        this.board[row][col] = { 
                            color: 'B', 
                            number: row * 4 + Math.ceil((col + 1)/2), 
                            king: false 
                        };
                    } else if (row > 4) {
                        this.board[row][col] = { 
                            color: 'R', 
                            number: (7 - row) * 4 + Math.ceil((col + 1)/2), 
                            king: false 
                        };
                    } else {
                        this.board[row][col] = null;
                    }
                } else {
                    this.board[row][col] = null;
                }
            }
        }
    }

    createBoardUI() {
        const boardElement = document.getElementById('board');
        boardElement.innerHTML = '';
        
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement('div');
                square.className = `square ${(row + col) % 2 === 0 ? 'white' : 'black'}`;
                square.dataset.row = row;
                square.dataset.col = col;
                square.addEventListener('click', (e) => this.handleClick(e));
                
                if (this.board[row][col]) {
                    const piece = document.createElement('div');
                    piece.className = `piece ${this.board[row][col].color === 'R' ? 'red' : 'blue'} ${this.board[row][col].king ? 'king' : ''}`;
                    piece.textContent = this.board[row][col].number;
                    square.appendChild(piece);
                }
                
                boardElement.appendChild(square);
            }
        }
    }

    handleClick(event) {
        if (this.capturePending) return;
        
        const square = event.currentTarget;
        const row = parseInt(square.dataset.row);
        const col = parseInt(square.dataset.col);
        
        if (this.selectedPiece) {
            if (this.isValidMove(this.selectedPiece, { row, col })) {
                this.pendingMove = { start: this.selectedPiece, end: { row, col } };
                const isCapture = Math.abs(row - this.selectedPiece.row) === 2;
                
                if (isCapture) {
                    this.showQuestion();
                } else {
                    this.completeMove();
                }
            }
            this.selectedPiece = null;
            this.createBoardUI();
        } else if (this.board[row][col] && this.board[row][col].color === this.currentTurn) {
            this.selectedPiece = { row, col };
            this.createBoardUI();
            square.querySelector('.piece').style.border = '3px solid yellow';
        }
    }

    isValidMove(start, end) {
        const piece = this.board[start.row][start.col];
        if (!piece) return false;

        const dx = end.col - start.col;
        const dy = end.row - start.row;
        const direction = piece.color === 'B' ? 1 : -1;
        const isKing = piece.king;

        // Basic move validation
        if (!isKing && dy !== direction && dy !== direction * 2) return false;
        if (Math.abs(dx) !== Math.abs(dy)) return false;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) return false;
        if (this.board[end.row][end.col]) return false;

        // Capture validation
        if (Math.abs(dx) === 2) {
            const midRow = (start.row + end.row) / 2;
            const midCol = (start.col + end.col) / 2;
            const midPiece = this.board[midRow][midCol];
            
            if (!midPiece || midPiece.color === piece.color) return false;
            
            this.midPiecePosition = { row: midRow, col: midCol };
        }

        return true;
    }

    completeMove() {
        const { start, end } = this.pendingMove;
        const isCapture = Math.abs(end.row - start.row) === 2;

        // Move the piece
        this.board[end.row][end.col] = this.board[start.row][start.col];
        this.board[start.row][start.col] = null;

        // Remove captured piece
        if (isCapture && this.midPiecePosition) {
            this.board[this.midPiecePosition.row][this.midPiecePosition.col] = null;
            this.midPiecePosition = null;
        }

        // King promotion
        if ((this.currentTurn === 'B' && end.row === 7) || 
            (this.currentTurn === 'R' && end.row === 0)) {
            this.board[end.row][end.col].king = true;
        }

        // Switch turns
        this.currentTurn = this.currentTurn === 'B' ? 'R' : 'B';
        document.getElementById('turn-display').textContent = 
            `Current Turn: ${this.currentTurn === 'B' ? 'Blue' : 'Red'}`;

        this.pendingMove = null;
        this.createBoardUI();

        // Check for a winner after the move
        this.checkForWinner();
    }

    checkForWinner() {
        const bluePieces = this.countPieces('B');
        const redPieces = this.countPieces('R');

        if (bluePieces === 0) {
            this.showWinner('Red');
        } else if (redPieces === 0) {
            this.showWinner('Blue');
        }
    }

    countPieces(color) {
        let count = 0;
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if (this.board[row][col] && this.board[row][col].color === color) {
                    count++;
                }
            }
        }
        return count;
    }

    showWinner(winner) {
        const winnerDisplay = document.createElement('div');
        winnerDisplay.className = 'winner-display';
        winnerDisplay.textContent = `${winner} ניצחון!`;
        document.body.appendChild(winnerDisplay);

        // Disable further moves
        this.capturePending = true;
    }

    showQuestion() {
        const availableQuestions = questions.filter((_, i) => !this.askedQuestions.includes(i));
        if (availableQuestions.length === 0) this.askedQuestions = [];
        
        const questionIndex = questions.indexOf(
            availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
        );
        this.askedQuestions.push(questionIndex);
        
        document.getElementById('question-text').textContent = questions[questionIndex];
        document.getElementById('initial-buttons').style.display = 'block';
        document.getElementById('answer-buttons').style.display = 'none';
        document.getElementById('question-modal').style.display = 'block';
        this.capturePending = true;
    }

    handleAnswer(correct) {
        document.getElementById('question-modal').style.display = 'none';
        this.capturePending = false;
        
        // Reset button visibility for next time
        document.getElementById('initial-buttons').style.display = 'block';
        document.getElementById('answer-buttons').style.display = 'none';
        
        if (correct) {
            this.completeMove();
        } else {
            this.currentTurn = this.currentTurn === 'B' ? 'R' : 'B';
            document.getElementById('turn-display').textContent = 
                `Current Turn: ${this.currentTurn === 'B' ? 'Blue' : 'Red'}`;

            this.pendingMove = null;
            this.midPiecePosition = null;
            this.createBoardUI();
        }
    }
}

// Initialize game
const game = new Checkers();

// Global functions for modal interaction
function proceedToAnswer() {
    document.getElementById('initial-buttons').style.display = 'none';
    document.getElementById('answer-buttons').style.display = 'block';
}

function handleAnswer(correct) {
    game.handleAnswer(correct);
}
