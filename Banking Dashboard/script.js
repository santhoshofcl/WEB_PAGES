document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to cards
    const cards = document.querySelectorAll('.bg-gray-800');
    cards.forEach((card, index) => {
        card.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => {
            card.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
            card.classList.remove('opacity-0', 'translate-y-4');
        }, 100);
    });

    // Add pulse animation to important elements
    const importantElements = document.querySelectorAll('.bg-emerald-500');
    importantElements.forEach(el => {
        el.classList.add('pulse');
    });

    // Initialize Revenue Flow Chart with continuous animations
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    let revenueChart;
    
    function updateRevenueChart() {
        if (revenueChart) revenueChart.destroy();
        
        revenueChart = new Chart(revenueCtx, {
            type: 'bar',
            data: {
                labels: ['March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [{
                    label: 'Revenue',
                    data: [12000, 15000, 18000, 21000, 23400, 22000],
                    backgroundColor: [
                        'rgba(16, 185, 129, 0.5)',
                        'rgba(16, 185, 129, 0.5)',
                        'rgba(16, 185, 129, 0.5)',
                        'rgba(16, 185, 129, 0.5)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(16, 185, 129, 0.5)'
                    ],
                    borderColor: [
                        'rgba(16, 185, 129, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(16, 185, 129, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return '$' + context.raw.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            },
            animation: {
                duration: 800,
                easing: 'easeOutElastic',
                delay: (ctx) => ctx.dataIndex * 80,
                onComplete: () => {
                    setTimeout(updateRevenueChart, 1000);
                    revenueCtx.shadowColor = 'rgba(0, 0, 0, 0)';
                },
                onProgress: (animation) => {
                    const progress = animation.currentStep / animation.numSteps;
                    revenueCtx.shadowColor = `rgba(16, 185, 129, ${0.3 + progress * 0.4})`;
                    revenueCtx.shadowBlur = 5 + progress * 10;
                    revenueCtx.shadowOffsetX = 2 * progress;
                    // Add subtle color pulse during animation
                    revenueChart.data.datasets[0].backgroundColor = 
                        revenueChart.data.datasets[0].backgroundColor.map(color => 
                            color.replace(/[\d\.]+\)$/, `${0.4 + progress*0.3})`));
                    revenueChart.update();
                }
            }
        });
    }

    // Initialize Expense Breakdown Chart with continuous animations
    const expenseCtx = document.getElementById('expenseChart').getContext('2d');
    let expenseChart;
    
    function updateExpenseChart() {
        if (expenseChart) expenseChart.destroy();
        
        expenseChart = new Chart(expenseCtx, {
            type: 'doughnut',
            data: {
                labels: ['Food', 'Clothes', 'Other'],
                datasets: [{
                    data: [950, 320, 480],
                    backgroundColor: [
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(168, 85, 247, 0.8)'
                    ],
                    borderColor: [
                        'rgba(16, 185, 129, 1)',
                        'rgba(59, 130, 246, 1)',
                        'rgba(168, 85, 247, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 800, 
                easing: 'easeOutBack',
                animateScale: true,
                animateRotate: true,
                delay: (ctx) => ctx.dataIndex * 60,
                onComplete: () => {
                    setTimeout(updateExpenseChart, 1000);
                },
                onProgress: (animation) => {
                    const progress = animation.currentStep / animation.numSteps;
                    expenseCtx.shadowColor = `rgba(0, 0, 0, ${0.1 * progress})`;
                    expenseCtx.shadowBlur = 5 * progress;
                    // Add subtle segment growth during animation
                    expenseChart.data.datasets[0].borderWidth = 1 + progress;
                    expenseChart.update();
                }
            }
        });
    }

    // Transaction Tab Filtering
    const transactionTabs = document.querySelectorAll('.transaction-tab');
    transactionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            transactionTabs.forEach(t => t.classList.remove('bg-emerald-500', 'text-white'));
            this.classList.add('bg-emerald-500', 'text-white');
        });
    });

    // Enhanced notification bell animation
    const notificationBell = document.querySelector('.fa-bell');
    notificationBell.style.transition = 'all 0.3s ease';
    
    notificationBell.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(15deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(-15deg)';
        }, 300);
        setTimeout(() => {
            this.style.transform = 'rotate(0)';
        }, 600);
    });

    notificationBell.addEventListener('click', function() {
        this.classList.add('animate-ping');
        setTimeout(() => {
            this.classList.remove('animate-ping');
        }, 1000);
    });

    // Add hover animation to profile avatar
    const profileAvatar = document.querySelector('.bg-emerald-500');
    profileAvatar.style.transition = 'all 0.3s ease';
    
    profileAvatar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    profileAvatar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0)';
    });

    // Add staggered animation to transaction items
    const transactions = document.querySelectorAll('.transaction-item');
    transactions.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.05}s`;
    });

    // Start continuous animations
    updateRevenueChart();
    updateExpenseChart();
});
